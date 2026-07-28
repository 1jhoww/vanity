import { PrimaryButton } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import styles from "./About.module.css";

const pillars = [
  {
    name: "Para cães e gatos",
    text: "Perfumes voltados ao cuidado pet."
  },
  {
    name: "50 ml e 500 ml",
    text: "Compare os volumes disponíveis em cada produto."
  },
  {
    name: "Catálogo atualizado",
    text: "Novos produtos entram após a divulgação oficial."
  },
  {
    name: "Atendimento comercial",
    text: "Converse com a equipe sobre revenda e distribuição."
  }
];

function About() {
  return (
    <>
      <SEO
        title="A Marca"
        description="Conheça a proposta da Vanity Pet e seu portfólio de perfumes para cães e gatos."
        path="/a-marca"
      />
      <PageHero
        eyebrow="A marca"
        title="Perfumes para cães e gatos."
        text="A Vanity Pet reúne diferentes fragrâncias em apresentações de 50 ml e 500 ml."
        compact
      />

      <section className={`section ${styles.story}`}>
        <Container className={styles.storyGrid}>
          <Reveal className={styles.storyTitle}>
            <span className={styles.kicker}>Nossa proposta</span>
            <h2>Fragrâncias com informação clara.</h2>
          </Reveal>
          <Reveal className={styles.storyText} delay={120}>
            <p className={styles.first}>
              Conheça cada perfume pelo nome, pela imagem e pelos volumes
              disponíveis.
            </p>
            <p>
              As informações de cada fragrância são atualizadas conforme novos
              materiais oficiais são fornecidos pela marca.
            </p>
          </Reveal>
          <Reveal className={styles.storyVisual} delay={180}>
            <figure>
              <img
                className={styles.petImage}
                src="/campaign/hero-dog.webp"
                alt="Cão em retrato editorial sobre fundo escuro"
                width="1024"
                height="1536"
                loading="lazy"
              />
              <img
                className={styles.productInset}
                src="/products/fragrances/black-vanity/500ml.webp"
                alt="Perfume Black Vanity de 500 ml"
                width="1024"
                height="1536"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </Container>
      </section>

      <section className={styles.statement}>
        <Container>
          <Reveal>
            <span>Uma assinatura para cada personalidade</span>
            <blockquote>
              O perfume também pode expressar personalidade.
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <section className={`section ${styles.positioning}`}>
        <Container className={styles.positioningGrid}>
          <Reveal className={styles.positioningContent}>
            <h2>Escolha a fragrância. Compare as apresentações.</h2>
            <p>
              Cada produto reúne os volumes disponíveis em uma única página, com
              imagens e informações fornecidas pela marca.
            </p>
          </Reveal>
          <div className={styles.principles}>
            <Reveal delay={80}>
              <strong>Fragrâncias</strong>
              <span>Perfumes para cães e gatos</span>
            </Reveal>
            <Reveal delay={140}>
              <strong>Apresentações</strong>
              <span>Volumes de 50 ml e 500 ml</span>
            </Reveal>
            <Reveal delay={200}>
              <strong>Uso profissional</strong>
              <span>Para groomers, pet shops e distribuidores</span>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={`section ${styles.pillarsSection}`}>
        <Container>
          <Reveal className={styles.pillarsHeader}>
            <h2>O que você encontra no catálogo.</h2>
          </Reveal>
          <div className={styles.pillars}>
            {pillars.map(({ name, text }, index) => (
              <Reveal key={name} className={styles.pillar} delay={index * 70}>
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container className={styles.ctaInner}>
          <Reveal>
            <small>Catálogo Vanity Pet</small>
            <h2>Veja todos os perfumes.</h2>
          </Reveal>
          <Reveal delay={100}>
            <PrimaryButton to="/produtos">
              Acessar catálogo
            </PrimaryButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export default About;
