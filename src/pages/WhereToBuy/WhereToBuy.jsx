import { MapPin, Phone, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { PrimaryButton } from "../../components/Button/Button";
import BrazilMap from "../../components/BrazilMap/BrazilMap";
import Container from "../../components/Container/Container";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import brazilMap from "../../assets/maps/brazil-states-map.json";
import { contactInfo } from "../../config/site";
import { distributors } from "../../data/distributors";
import {
  countCoverageByState,
  getCoverageRegions,
  getCoverageSearchText,
  getServedStates,
  listCoveredStates,
  normalizeStateCode,
  servesState
} from "../../utils/distributorCoverage";
import styles from "./WhereToBuy.module.css";

const stateNames = Object.fromEntries(
  brazilMap.states.map(({ uf, name }) => [uf, name])
);
const states = listCoveredStates(distributors);
const regions = [...new Set(distributors.flatMap(getCoverageRegions))].sort(
  (first, second) => first.localeCompare(second, "pt-BR")
);
const whatsappMessage =
  "Olá! Vim pelo site da Vanity Pet e gostaria de receber mais informações sobre os produtos.";
const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);

function normalize(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getCoverage(distributor) {
  return [
    ...(distributor.serviceCities || []),
    ...(distributor.serviceAreas || [])
  ];
}

function distributorSearchText(distributor) {
  return [
    distributor.name,
    distributor.contactName,
    distributor.city,
    distributor.state,
    distributor.region,
    ...getCoverage(distributor)
  ]
    .filter(Boolean)
    .join(" ");
}

function matchesDistributorSearch(distributor, search) {
  if (!search) return true;

  const searchedState = normalizeStateCode(search);
  if (searchedState) return servesState(distributor, searchedState);

  const haystack = normalize(
    `${distributorSearchText(distributor)} ${getCoverageSearchText(
      distributor
    )}`
  );

  return haystack.includes(normalize(search));
}

function getWhatsapps(distributor) {
  return [
    distributor.whatsapp,
    ...(distributor.additionalWhatsapps || [])
  ].filter(Boolean);
}

function getPhones(distributor) {
  return [distributor.phone].filter(Boolean);
}

function normalizeWhatsapp(value = "") {
  const digits = value.replace(/\D/g, "");

  return digits.startsWith("55") && [12, 13].includes(digits.length)
    ? digits
    : `55${digits}`;
}

function getWhatsappUrl(value) {
  return `https://wa.me/${normalizeWhatsapp(
    value
  )}?text=${encodedWhatsappMessage}`;
}

function formatWhatsapp(value) {
  const normalizedNumber = normalizeWhatsapp(value);
  const localNumber = normalizedNumber.slice(2);

  if (localNumber.length === 11) {
    return `(${localNumber.slice(0, 2)}) ${localNumber.slice(
      2,
      7
    )}-${localNumber.slice(7)}`;
  }

  if (localNumber.length === 10) {
    return `(${localNumber.slice(0, 2)}) ${localNumber.slice(
      2,
      6
    )}-${localNumber.slice(6)}`;
  }

  return `+${normalizedNumber}`;
}

function distributorLabel(count) {
  return `${count} ${count === 1 ? "distribuidor" : "distribuidores"}`;
}

function WhereToBuy() {
  const [filters, setFilters] = useState({
    search: "",
    state: "",
    region: ""
  });
  const [activePartnerId, setActivePartnerId] = useState("");
  const resultsSectionRef = useRef(null);
  const pendingMapScrollStateRef = useRef("");

  const mapCandidates = useMemo(
    () =>
      distributors.filter((item) => {
        return (
          matchesDistributorSearch(item, filters.search) &&
          (!filters.region ||
            getCoverageRegions(item).includes(filters.region))
        );
      }),
    [filters.region, filters.search]
  );

  const results = useMemo(
    () =>
      mapCandidates.filter(
        (item) => !filters.state || servesState(item, filters.state)
      ),
    [filters.state, mapCandidates]
  );

  const counts = useMemo(
    () => countCoverageByState(mapCandidates),
    [mapCandidates]
  );
  const activePartner =
    results.find((item) => item.id === activePartnerId) || null;
  const hasFilters = Boolean(
    filters.search || filters.state || filters.region
  );

  useEffect(() => {
    const pendingState = pendingMapScrollStateRef.current;
    if (!pendingState || filters.state !== pendingState) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const target = resultsSectionRef.current;
      if (!target) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start"
      });
      pendingMapScrollStateRef.current = "";
    });

    return () => window.cancelAnimationFrame(frame);
  }, [filters.state, results.length]);

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
    setActivePartnerId("");
  };

  const toggleState = (state) => {
    updateFilter("state", filters.state === state ? "" : state);
  };

  const handleMapToggleState = (state) => {
    const isRemovingFilter = filters.state === state;
    pendingMapScrollStateRef.current = isRemovingFilter ? "" : state;
    toggleState(state);
  };

  const clearFilters = () => {
    setFilters({ search: "", state: "", region: "" });
    setActivePartnerId("");
  };

  const summary = activePartner
    ? {
        eyebrow: "Distribuidor selecionado",
        title: activePartner.name,
        text: `${activePartner.city} · ${stateNames[activePartner.state]} (${activePartner.state})${
          filters.state && activePartner.state !== filters.state
            ? ` · Atende ${stateNames[filters.state]}`
            : ""
        }`
      }
    : filters.state
      ? {
          eyebrow: "Estado selecionado",
          title: stateNames[filters.state],
          text: distributorLabel(results.length)
        }
      : {
          eyebrow: "Presença nacional",
          title: `${distributors.length} distribuidores`,
          text: `Rede presente em ${states.length} estados brasileiros`
        };

  return (
    <>
      <SEO
        title="Onde Encontrar"
        description="Localize distribuidores Vanity Pet por nome, cidade, estado ou região em nosso mapa interativo."
        path="/onde-comprar"
      />

      <header className={styles.opening}>
        <Container className={styles.openingInner}>
          <Reveal>
            <span className={styles.eyebrow}>Onde encontrar</span>
            <h1>Vanity Pet perto de você.</h1>
          </Reveal>
          <Reveal className={styles.openingCopy} delay={80}>
            <p>
              Consulte nossa rede de distribuidores e encontre atendimento na
              sua região.
            </p>
            <strong>
              {distributors.length} distribuidores · {states.length} estados
            </strong>
          </Reveal>
        </Container>
      </header>

      <main className={styles.locator}>
        <Container>
          <form
            className={styles.filters}
            role="search"
            aria-label="Buscar distribuidores"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className={styles.searchControl}>
              <span>Distribuidor, cidade ou estado</span>
              <div>
                <Search aria-hidden="true" strokeWidth={1.4} />
                <input
                  type="search"
                  value={filters.search}
                  onChange={(event) =>
                    updateFilter("search", event.target.value)
                  }
                  placeholder="Ex.: Campinas, PetMais ou SP"
                  autoComplete="off"
                />
              </div>
            </label>

            <label>
              <span>Estado</span>
              <select
                value={filters.state}
                onChange={(event) => updateFilter("state", event.target.value)}
              >
                <option value="">Todos os estados</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state} — {stateNames[state]}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Região</span>
              <select
                value={filters.region}
                onChange={(event) => updateFilter("region", event.target.value)}
              >
                <option value="">Todas as regiões</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className={styles.clearButton}
              onClick={clearFilters}
              disabled={!hasFilters}
            >
              Limpar filtros
            </button>
          </form>

          <div className={styles.workspace}>
            <Reveal className={styles.mapPanel}>
              <div className={styles.mapHeading}>
                <span>Mapa por estado</span>
                <p>
                  O mapa reflete a busca e os filtros aplicados à rede.
                </p>
              </div>

              <BrazilMap
                counts={counts}
                selectedState={filters.state}
                highlightedState={activePartner?.state || ""}
                onToggleState={handleMapToggleState}
              />

              <div
                className={styles.mapSummary}
                aria-live="polite"
                aria-atomic="true"
              >
                <span>{summary.eyebrow}</span>
                <strong>{summary.title}</strong>
                <p>{summary.text}</p>
              </div>
            </Reveal>

            <Reveal className={styles.directory} delay={80}>
              <div
                ref={resultsSectionRef}
                className={styles.directoryHeader}
              >
                <div>
                  <span>Rede de distribuição</span>
                  <h2>Encontre um parceiro.</h2>
                </div>
                <p aria-live="polite">{distributorLabel(results.length)}</p>
              </div>

              {results.length > 0 ? (
                <div className={styles.resultsList}>
                  {results.map((partner, index) => {
                    const isActive = activePartner?.id === partner.id;
                    const coverage = getCoverage(partner);
                    const phones = getPhones(partner);
                    const whatsapps = getWhatsapps(partner);
                    const servedStates = getServedStates(partner);
                    const coverageLabel =
                      filters.state && partner.state !== filters.state
                        ? `Atende ${stateNames[filters.state]}`
                        : servedStates.length > 1
                          ? `Cobertura: ${servedStates.join(", ")}`
                          : "";

                    return (
                      <article
                        className={`${styles.partner} ${
                          isActive ? styles.partnerActive : ""
                        }`}
                        key={partner.id}
                      >
                        <button
                          type="button"
                          className={styles.partnerMain}
                          aria-pressed={isActive}
                          aria-label={`${partner.name}, ${partner.city}, ${
                            stateNames[partner.state]
                          }. Destacar ${partner.state} no mapa.`}
                          onClick={() =>
                            setActivePartnerId(isActive ? "" : partner.id)
                          }
                        >
                          <span className={styles.partnerIndex}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className={styles.partnerCopy}>
                            <strong>{partner.name}</strong>
                            {partner.contactName && (
                              <span className={styles.partnerContactName}>
                                Contato comercial: {partner.contactName}
                              </span>
                            )}
                            <small>
                              <MapPin aria-hidden="true" strokeWidth={1.4} />
                              {partner.city} · {partner.state}
                            </small>
                            {coverageLabel && (
                              <span className={styles.partnerCoverage}>
                                {coverageLabel}
                              </span>
                            )}
                          </span>
                          <span className={styles.partnerRegion}>
                            {partner.region}
                          </span>
                        </button>

                        {coverage.length > 0 && (
                          <details className={styles.partnerDetails}>
                            <summary>
                              <span>Área atendida</span>
                              <small>Ver mais detalhes</small>
                            </summary>
                            <p>{coverage.join(" · ")}</p>
                          </details>
                        )}

                        {(phones.length > 0 || whatsapps.length > 0) && (
                          <div
                            className={styles.partnerContacts}
                            aria-label={`Contatos de ${partner.name}`}
                          >
                            {phones.map((phone) => (
                              <a
                                key={phone}
                                href={`tel:+${phone.replace(/\D/g, "")}`}
                                aria-label={`Ligar para ${
                                  partner.name
                                }: ${formatWhatsapp(phone)}`}
                              >
                                <Phone
                                  aria-hidden="true"
                                  strokeWidth={1.5}
                                />
                                <span>Telefone</span>
                                <strong>{formatWhatsapp(phone)}</strong>
                              </a>
                            ))}
                            {whatsapps.map((whatsapp, contactIndex) => (
                              <a
                                key={whatsapp}
                                href={getWhatsappUrl(whatsapp)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Abrir WhatsApp ${
                                  contactIndex + 1
                                } de ${partner.name}: ${formatWhatsapp(
                                  whatsapp
                                )}`}
                              >
                                <Phone
                                  aria-hidden="true"
                                  strokeWidth={1.5}
                                />
                                <span>
                                  {contactIndex === 0
                                    ? "WhatsApp"
                                    : `WhatsApp ${contactIndex + 1}`}
                                </span>
                                <strong>{formatWhatsapp(whatsapp)}</strong>
                              </a>
                            ))}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <h2>Nenhum distribuidor encontrado.</h2>
                  <p>
                    Tente outro nome, cidade ou combinação de filtros.
                  </p>
                  <button type="button" onClick={clearFilters}>
                    Limpar filtros
                  </button>
                </div>
              )}
            </Reveal>
          </div>
        </Container>
      </main>

      <section className={styles.cta} aria-labelledby="locator-cta-title">
        <Container className={styles.ctaInner}>
          <Reveal>
            <span className={styles.eyebrow}>Atendimento Vanity Pet</span>
            <h2 id="locator-cta-title">
              Não encontrou atendimento na sua região?
            </h2>
            <p>
              Fale com nossa equipe para consultar disponibilidade ou conhecer
              oportunidades comerciais.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <PrimaryButton
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Falar pelo WhatsApp
            </PrimaryButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export default WhereToBuy;
