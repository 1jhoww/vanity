import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import {
  PrimaryButton,
  TextLink
} from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import FragranceShowcase from "../../components/FragranceShowcase/FragranceShowcase";
import ProductVisual from "../../components/ProductVisual/ProductVisual";
import Reveal from "../../components/Reveal/Reveal";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SEO from "../../components/SEO/SEO";
import { fragrances } from "../../data/products";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { slug } = useParams();
  const fragrance = fragrances.find(
    (item) => item.slug === slug && item.available !== false
  );
  const [selection, setSelection] = useState({ slug: "", volume: "" });

  const related = useMemo(() => {
    if (!fragrance) return [];
    const available = fragrances.filter(
      (item) => item.available !== false && item.id !== fragrance.id
    );
    const currentIndex = fragrances.findIndex((item) => item.id === fragrance.id);

    return [...available]
      .sort((first, second) => {
        const firstIndex = fragrances.findIndex((item) => item.id === first.id);
        const secondIndex = fragrances.findIndex((item) => item.id === second.id);
        return Math.abs(firstIndex - currentIndex) - Math.abs(secondIndex - currentIndex);
      })
      .slice(0, 3);
  }, [fragrance]);

  if (!fragrance) {
    return <Navigate to="/404" replace />;
  }

  const defaultPresentation =
    fragrance.sizes.find((size) => size.image) ?? fragrance.sizes[0];
  const selectedPresentation =
    selection.slug === fragrance.slug
      ? fragrance.sizes.find((size) => size.volume === selection.volume) ??
        defaultPresentation
      : defaultPresentation;
  const hasNotes = Object.values(fragrance.olfactoryNotes).some(
    (notes) => notes.length > 0
  );
  const hasOlfactoryInformation = Boolean(
    fragrance.concept ||
      fragrance.family ||
      fragrance.profile.length ||
      fragrance.sensation ||
      hasNotes
  );
  const hasUsage = Boolean(fragrance.usage);

  return (
    <>
      <SEO
        title={fragrance.name}
        description={`${fragrance.name}: perfume para cães e gatos. Conheça as apresentações disponíveis e saiba onde encontrar.`}
        path={`/produtos/${fragrance.slug}`}
        type="product"
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: fragrance.name,
          description: fragrance.description,
          brand: { "@type": "Brand", name: "Vanity Pet" },
          category: "Perfume pet"
        }}
      />

      <section className={styles.productHero}>
        <Container>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true" />
            <Link to="/produtos">Perfumes</Link>
            <span aria-hidden="true" />
            <strong aria-current="page">{fragrance.name}</strong>
          </nav>

          <div className={styles.productGrid}>
            <div className={styles.visualColumn}>
              <ProductVisual
                product={fragrance}
                presentation={selectedPresentation}
                size="detail"
                priority
              />
              <p className={styles.visualCaption}>
                {selectedPresentation.image
                  ? `Fotografia oficial · ${selectedPresentation.volume}`
                  : `Fotografia de ${selectedPresentation.volume} em atualização`}
              </p>
            </div>

            <Reveal className={styles.productInfo}>
              {(fragrance.isNew || fragrance.collection) && (
                <div className={styles.labels}>
                  {fragrance.isNew && <span>Lançamento</span>}
                  {fragrance.collection && <span>{fragrance.collection}</span>}
                </div>
              )}
              <small>Perfume para cães e gatos</small>
              <h1>{fragrance.name}</h1>
              <p className={styles.description}>{fragrance.description}</p>

              <div className={styles.volumes}>
                <h2>Escolha a apresentação</h2>
                <div role="group" aria-label="Apresentações disponíveis">
                  {fragrance.sizes.map((presentation) => (
                    <button
                      key={presentation.volume}
                      type="button"
                      className={selectedPresentation.volume === presentation.volume ? styles.selected : ""}
                      aria-pressed={selectedPresentation.volume === presentation.volume}
                      onClick={() =>
                        setSelection({
                          slug: fragrance.slug,
                          volume: presentation.volume
                        })
                      }
                    >
                      <span>{presentation.volume}</span>
                      <small>{presentation.image ? "imagem disponível" : "imagem em atualização"}</small>
                    </button>
                  ))}
                </div>
              </div>

              {!selectedPresentation.image && (
                <p className={styles.notice} role="status">
                  A imagem desta apresentação está em atualização. Escolha uma
                  apresentação com fotografia oficial para voltar à imagem disponível.
                </p>
              )}

              <div className={styles.actions}>
                <PrimaryButton to="/onde-comprar">Onde encontrar</PrimaryButton>
                <TextLink to="/contato">
                  Falar com a equipe
                </TextLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {hasOlfactoryInformation && (
        <section className={`section ${styles.details}`}>
          <Container className={styles.detailsGrid}>
            <Reveal>
              <h2>Informações da fragrância.</h2>
            </Reveal>
            <Reveal className={styles.detailContent} delay={100}>
              {fragrance.concept && (
                <div>
                  <h3>Conceito</h3>
                  <p>{fragrance.concept}</p>
                </div>
              )}
              {fragrance.family && (
                <div>
                  <h3>Família olfativa</h3>
                  <p>{fragrance.family}</p>
                </div>
              )}
              {fragrance.profile.length > 0 && (
                <div>
                  <h3>Perfil</h3>
                  <p>{fragrance.profile.join(", ")}</p>
                </div>
              )}
              {fragrance.sensation && (
                <div>
                  <h3>Sensação</h3>
                  <p>{fragrance.sensation}</p>
                </div>
              )}
              {hasNotes && (
                <div>
                  <h3>Notas olfativas</h3>
                  <ul>
                    {fragrance.olfactoryNotes.top.length > 0 && (
                      <li>Saída: {fragrance.olfactoryNotes.top.join(", ")}</li>
                    )}
                    {fragrance.olfactoryNotes.heart.length > 0 && (
                      <li>Corpo: {fragrance.olfactoryNotes.heart.join(", ")}</li>
                    )}
                    {fragrance.olfactoryNotes.base.length > 0 && (
                      <li>Fundo: {fragrance.olfactoryNotes.base.join(", ")}</li>
                    )}
                  </ul>
                </div>
              )}
            </Reveal>
          </Container>
        </section>
      )}

      {hasUsage && (
        <section className={`section ${styles.usage}`}>
          <Container className={styles.usageGrid}>
            <Reveal>
              <h2>Como usar.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p>{fragrance.usage}</p>
            </Reveal>
          </Container>
        </section>
      )}

      <section className={styles.professional}>
        <Container className={styles.professionalInner}>
          <Reveal>
            <small>Atendimento profissional</small>
            <h2>Revenda e uso profissional.</h2>
            <p>Fale com a equipe sobre atendimento comercial.</p>
          </Reveal>
          <Reveal delay={100}>
            <PrimaryButton to="/contato">Falar com o comercial</PrimaryButton>
          </Reveal>
        </Container>
      </section>

      <section className={`section ${styles.related}`}>
        <Container>
          <SectionTitle
            title="Outros perfumes."
            text="Conheça mais opções do catálogo."
            light
          />
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <FragranceShowcase
                key={item.id}
                product={item}
                variant="compact"
                headingLevel={3}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProductDetail;
