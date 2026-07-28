import { Building2, MapPin, Store } from "lucide-react";
import { useMemo, useState } from "react";
import {
  PrimaryButton,
  SecondaryButton
} from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import { stores } from "../../data/stores";
import styles from "./WhereToBuy.module.css";

function WhereToBuy() {
  const [filters, setFilters] = useState({ state: "", city: "", type: "" });

  const states = [...new Set(stores.map((store) => store.state))].sort();
  const cities = [
    ...new Set(
      stores
        .filter((store) => !filters.state || store.state === filters.state)
        .map((store) => store.city)
    )
  ].sort();
  const types = [...new Set(stores.map((store) => store.type))].sort();

  const filteredStores = useMemo(
    () =>
      stores.filter(
        (store) =>
          (!filters.state || store.state === filters.state) &&
          (!filters.city || store.city === filters.city) &&
          (!filters.type || store.type === filters.type)
      ),
    [filters]
  );

  const updateFilter = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
      ...(key === "state" ? { city: "" } : {})
    }));
  };

  return (
    <>
      <SEO
        title="Onde Comprar"
        description="Encontre canais para conhecer os perfumes Vanity Pet e converse com a marca sobre revenda e distribuição."
        path="/onde-comprar"
      />
      <PageHero
        eyebrow="Onde comprar"
        title="Pontos de venda em atualização."
        text="Consulte os dados demonstrativos abaixo ou fale com a equipe sobre disponibilidade na sua região."
        compact
      />

      <section className={`section ${styles.locator}`}>
        <Container>
          <Reveal className={styles.filters}>
            <div className={styles.filterIntro}>
              <MapPin aria-hidden="true" strokeWidth={1.2} />
              <div>
                <span className={styles.kicker}>Localizador</span>
                <h2>Busque por região e canal.</h2>
              </div>
            </div>
            <div className={styles.filterFields}>
              <label>
                <span>Estado</span>
                <select
                  value={filters.state}
                  onChange={(event) => updateFilter("state", event.target.value)}
                >
                  <option value="">Todos os estados</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Cidade</span>
                <select
                  value={filters.city}
                  onChange={(event) => updateFilter("city", event.target.value)}
                >
                  <option value="">Todas as cidades</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Tipo de canal</span>
                <select
                  value={filters.type}
                  onChange={(event) => updateFilter("type", event.target.value)}
                >
                  <option value="">Todos os canais</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </Reveal>

          <div className={styles.resultHeader}>
            <p aria-live="polite">
              {filteredStores.length}{" "}
              {filteredStores.length === 1 ? "local encontrado" : "locais encontrados"}
            </p>
            <span>Dados demonstrativos — confirmar antes da publicação</span>
          </div>

          <div className={styles.storeGrid}>
            {filteredStores.length > 0 ? (
              filteredStores.map((store, index) => (
                <Reveal key={store.id} className={styles.storeCard} delay={(index % 3) * 70}>
                  <div className={styles.storeIcon}>
                    {store.type === "Distribuidor" ? (
                      <Building2 aria-hidden="true" strokeWidth={1.2} />
                    ) : (
                      <Store aria-hidden="true" strokeWidth={1.2} />
                    )}
                    <span>{store.state}</span>
                  </div>
                  <small>{store.type}</small>
                  <h3>{store.name}</h3>
                  <p>{store.address}</p>
                  <div>
                    <span>{store.city}</span>
                    <span>{store.channel}</span>
                  </div>
                </Reveal>
              ))
            ) : (
              <div className="no-results">
                <h2>Nenhum ponto encontrado.</h2>
                <p>Experimente outra combinação de região e estabelecimento.</p>
                <SecondaryButton
                  type="button"
                  tone="dark"
                  onClick={() => setFilters({ state: "", city: "", type: "" })}
                >
                  Limpar filtros
                </SecondaryButton>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className={styles.retailer}>
        <Container className={styles.retailerInner}>
          <Reveal>
            <span className={`${styles.kicker} ${styles.kickerLight}`}>
              Parcerias
            </span>
            <h2>Quer revender Vanity Pet?</h2>
            <p>
              Fale com a equipe comercial sobre revenda e distribuição.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <PrimaryButton to="/contato">Falar com o comercial</PrimaryButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export default WhereToBuy;
