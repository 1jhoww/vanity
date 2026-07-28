import { PrimaryButton } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import FragranceShowcase from "../../components/FragranceShowcase/FragranceShowcase";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import { fragrances } from "../../data/products";
import styles from "./Lines.module.css";

const availableFragrances = fragrances.filter(
  (fragrance) => fragrance.available !== false
);
const highlights = availableFragrances
  .filter((fragrance) => fragrance.featured)
  .slice(0, 4);
const newReleases = availableFragrances.filter((fragrance) => fragrance.isNew);

function Lines() {
  return (
    <>
      <SEO
        title="Coleção"
        description="Conheça o portfólio de perfumes e acompanhe novidades, lançamentos e futuras coleções."
        path="/linhas"
      />
      <PageHero
        eyebrow="Coleção"
        title="Conheça o portfólio Vanity Pet."
        text="Veja os perfumes disponíveis e acompanhe os lançamentos da marca."
        compact
      />

      <section className={`section ${styles.intro}`}>
        <Container className={styles.introGrid}>
          <Reveal>
            <h2>Perfumes disponíveis em 50 ml e 500 ml.</h2>
          </Reveal>
          <Reveal className={styles.introCopy} delay={100}>
            <p>
              Cada fragrância reúne suas apresentações em uma única página.
              Consulte os volumes e as imagens disponíveis.
            </p>
            <ul>
              <li>Perfumes para cães e gatos</li>
              <li>Apresentações de 50 ml e 500 ml</li>
              <li>Informações atualizadas com materiais oficiais</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className={`section ${styles.highlights}`}>
        <Container>
          <Reveal className={styles.sectionHeader}>
            <h2>Perfumes em destaque.</h2>
            <p>Uma seleção do catálogo atual.</p>
          </Reveal>
          <div className={styles.highlightGrid}>
            {highlights.map((fragrance, index) => (
              <Reveal key={fragrance.id} delay={(index % 2) * 60}>
                <FragranceShowcase
                  product={fragrance}
                  variant="compact"
                  headingLevel={3}
                  actionTone="dark"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {newReleases.length > 0 && (
        <section className={`section ${styles.releases}`}>
          <Container>
            <Reveal className={styles.sectionHeader}>
              <span className={`${styles.kicker} ${styles.kickerLight}`}>
                Lançamentos
              </span>
              <h2>Novidades do catálogo.</h2>
            </Reveal>
            <div className={styles.highlightGrid}>
              {newReleases.slice(0, 4).map((fragrance) => (
                <FragranceShowcase
                  key={fragrance.id}
                  product={fragrance}
                  variant="compact"
                  headingLevel={3}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className={styles.future}>
        <Container className={styles.futureInner}>
          <Reveal>
            <small>Atualizações da coleção</small>
            <h2>O catálogo acompanha cada lançamento oficial.</h2>
            <p>
              Novos perfumes, coleções e formatos entram nesta página assim que
              estiverem disponíveis.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <PrimaryButton to="/produtos">Conheça os perfumes</PrimaryButton>
          </Reveal>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container className={styles.ctaInner}>
          <Reveal>
            <small>Atendimento comercial</small>
            <h2>Quer revender Vanity Pet?</h2>
          </Reveal>
          <Reveal delay={100}>
            <PrimaryButton to="/contato">
              Falar com o comercial
            </PrimaryButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export default Lines;
