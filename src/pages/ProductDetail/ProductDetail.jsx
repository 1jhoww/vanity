import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router";
import { PrimaryButton, TextLink } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import FragranceShowcase from "../../components/FragranceShowcase/FragranceShowcase";
import Reveal from "../../components/Reveal/Reveal";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SEO from "../../components/SEO/SEO";
import { fragrances, getInspirationText } from "../../data/products";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { slug } = useParams();
  const fragrance = fragrances.find(
    (item) =>
      (item.slug === slug || item.aliases?.includes(slug)) &&
      item.available !== false
  );

  const related = useMemo(() => {
    if (!fragrance) return [];

    const available = fragrances.filter(
      (item) => item.available !== false && item.id !== fragrance.id
    );
    const currentIndex = fragrances.findIndex(
      (item) => item.id === fragrance.id
    );

    return [...available]
      .sort((first, second) => {
        const firstIndex = fragrances.findIndex(
          (item) => item.id === first.id
        );
        const secondIndex = fragrances.findIndex(
          (item) => item.id === second.id
        );

        return (
          Math.abs(firstIndex - currentIndex) -
          Math.abs(secondIndex - currentIndex)
        );
      })
      .slice(0, 3);
  }, [fragrance]);

  if (!fragrance) {
    return <Navigate to="/404" replace />;
  }

  if (slug !== fragrance.slug) {
    return <Navigate to={`/produtos/${fragrance.slug}`} replace />;
  }

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
        title={fragrance.seo.title}
        description={fragrance.seo.description}
        path={`/produtos/${fragrance.slug}`}
        type="product"
        image={fragrance.catalogArtwork.src}
        imageAlt={`Perfumes ${fragrance.name} Vanity Pet nas apresentações de 50 ml e 500 ml`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: fragrance.name,
          description: fragrance.seo.description,
          image: `https://www.vanitypet.com.br${fragrance.catalogArtwork.src}`,
          url: `https://www.vanitypet.com.br/produtos/${fragrance.slug}`,
          brand: { "@type": "Brand", name: "Vanity Pet" },
          category: "Perfume pet",
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Referência olfativa",
              value: getInspirationText(fragrance)
            },
            {
              "@type": "PropertyValue",
              name: "Apresentações",
              value: "50 ml e 500 ml"
            }
          ]
        }}
      />

      <section className={styles.productHero}>
        <Container>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true" />
            <Link to="/fragrancias">Fragrâncias</Link>
            <span aria-hidden="true" />
            <strong aria-current="page">{fragrance.name}</strong>
          </nav>

          <div className={styles.productGrid}>
            <figure className={styles.visualColumn}>
              <img
                className={styles.catalogArtwork}
                src={fragrance.catalogArtwork.src}
                alt={`Perfume ${fragrance.name} Vanity Pet em frascos de 50 ml e 500 ml`}
                width={fragrance.catalogArtwork.width}
                height={fragrance.catalogArtwork.height}
                decoding="async"
                fetchPriority="high"
              />
              <figcaption className={styles.visualCaption}>
                Arte editorial · 50 ml e 500 ml
              </figcaption>
            </figure>

            <Reveal className={styles.productInfo}>
              <small>{fragrance.family}</small>
              <h1>{fragrance.name}</h1>
              <p className={styles.inspiration}>
                {getInspirationText(fragrance)}
              </p>
              <p className={styles.description}>{fragrance.description}</p>

              <div className={styles.volumes}>
                <h2>Apresentações disponíveis</h2>
                <ul aria-label="Apresentações disponíveis">
                  {fragrance.sizes.map((presentation) => (
                    <li key={presentation.volume}>{presentation.volume}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.actions}>
                <PrimaryButton to="/onde-comprar">Onde encontrar</PrimaryButton>
                <TextLink to="/contato">Falar com a equipe</TextLink>
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
                      <li>
                        Corpo: {fragrance.olfactoryNotes.heart.join(", ")}
                      </li>
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
