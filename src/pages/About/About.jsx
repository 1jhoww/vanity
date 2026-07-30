import { TextLink } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <SEO
        title="A Marca"
        description="Conheça a Vanity Pet, perfumaria pet premium com fragrâncias importadas e fórmulas hipoalergênicas para cães e gatos."
        path="/a-marca"
      />

      <section className={styles.opening} aria-labelledby="about-title">
        <Container className={styles.openingInner}>
          <div className={styles.openingCopy}>
            <span className={styles.openingEyebrow}>A marca</span>
            <h1 id="about-title">Elegância que permanece.</h1>
            <p>
              Fragrâncias importadas e fórmulas hipoalergênicas que transformam
              o cuidado pet em uma experiência de perfumaria sofisticada.
            </p>
          </div>

          <figure className={styles.openingVisual}>
            <picture>
              <img
                src="/images/about/about-opening-products.png"
                alt="Frascos de perfumes Vanity Pet em composição editorial sobre fundo preto"
                width="1536"
                height="1024"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </figure>
        </Container>
      </section>

      <section className={styles.origin} aria-labelledby="origin-title">
        <Container className={styles.originGrid}>
          <Reveal className={styles.originCopy}>
            <div className={styles.originStamp}>
              <strong>2016</strong>
              <span>O início da Vanity Pet</span>
            </div>
            <span className={styles.chapterLabel}>Capítulo 01 · Origem</span>
            <h2 id="origin-title">O começo de uma nova ideia.</h2>
            <p>
              A Vanity Pet nasceu da experiência no universo pet e da vontade
              de unir fragrâncias importadas de alta qualidade a fórmulas
              hipoalergênicas em um novo conceito de perfumaria para o setor.
            </p>
            <blockquote>
              Fragrâncias exclusivas para transformar a finalização em
              presença.
            </blockquote>
          </Reveal>

          <Reveal as="figure" className={styles.originMedia} delay={90}>
            <picture>
              <img
                src="/images/about/about-origin-border-collie-night.png"
                alt="Perfumes Vanity Pet ao lado de um Border Collie e um Pastor de Shetland"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <figcaption>
              Cuidado, acabamento e identidade desde o primeiro gesto.
            </figcaption>
          </Reveal>
        </Container>
      </section>

      <section className={styles.identity} aria-labelledby="identity-title">
        <Container>
          <Reveal className={styles.identityHeader}>
            <span className={styles.chapterLabel}>
              Capítulo 02 · Identidade
            </span>
            <h2 id="identity-title">Uma ideia que ganhou forma.</h2>
          </Reveal>

          <div className={styles.identityLayout}>
            <Reveal as="figure" className={styles.identityMedia} delay={70}>
              <picture>
                <img
                  src="/images/about/poodle-with-perfume-bottle.jpeg"
                  alt="Poodle ao lado de um perfume Vanity Pet em uma composição editorial"
                  width="2752"
                  height="1536"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>A fragrância como último gesto do cuidado.</figcaption>
            </Reveal>

            <Reveal className={styles.identityCopy} delay={120}>
              <p>
                Qualidade, luxo e personalidade orientam cada criação — da
                seleção das fragrâncias à formulação delicada que chega ao pet.
              </p>
              <blockquote>Mais que aromas, uma identidade própria.</blockquote>
              <dl className={styles.principles}>
                <div>
                  <dt>Qualidade</dt>
                  <dd>Em cada escolha.</dd>
                </div>
                <div>
                  <dt>Personalidade</dt>
                  <dd>Em cada criação.</dd>
                </div>
                <div>
                  <dt>Experiência</dt>
                  <dd>Em cada finalização.</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <Container className={styles.manifestoInner}>
          <Reveal>
            <span className={styles.chapterLabel}>Manifesto</span>
            <h2 id="manifesto-title">
              Cada detalhe constrói a experiência.
            </h2>
          </Reveal>
          <Reveal className={styles.manifestoLines} delay={90}>
            <span>Cuidado que se percebe.</span>
            <span>Personalidade que permanece.</span>
            <span>Qualidade em cada escolha.</span>
          </Reveal>
        </Container>
      </section>

      <section
        className={styles.recognition}
        aria-labelledby="recognition-title"
      >
        <Container className={styles.recognitionGrid}>
          <Reveal className={styles.recognitionNumber}>
            <strong>2</strong>
            <span>anos consecutivos</span>
          </Reveal>

          <Reveal className={styles.recognitionStory} delay={90}>
            <span className={styles.chapterLabel}>
              Capítulo 03 · Reconhecimento
            </span>
            <h2 id="recognition-title">Uma trajetória reconhecida.</h2>
            <p>
              Na Pet South America, a Vanity Pet consolidou sua presença ao ser
              sucesso de vendas por dois anos consecutivos.
            </p>
            <div className={styles.eventLine}>
              <strong>Pet South America</strong>
              <span>Presença real no mercado pet</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={styles.nextChapter} aria-labelledby="next-title">
        <Container className={styles.nextGrid}>
          <Reveal className={styles.nextLabel}>
            <span>Próximo capítulo</span>
          </Reveal>

          <Reveal className={styles.nextContent} delay={80}>
            <h2 id="next-title">Estamos apenas começando.</h2>
            <p>
              Nossa linha de alta perfumaria foi o primeiro passo. A Vanity Pet
              segue desenvolvendo produtos que unem sofisticação olfativa,
              cuidado e novas possibilidades para o universo pet.
            </p>
            <TextLink to="/fragrancias">Conheça nossos perfumes</TextLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export default About;
