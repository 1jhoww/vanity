import { TextLink } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import styles from "./About.module.css";

const testimonials = [
  {
    context: "Profissionais",
    statement:
      "Uma fragrância marcante valoriza a finalização e ajuda a transformar o cuidado em uma experiência completa."
  },
  {
    context: "Tutores",
    statement:
      "O aroma se torna parte da lembrança do banho, prolongando a sensação de cuidado também em casa."
  },
  {
    context: "Identidade",
    statement:
      "Perfis olfativos distintos permitem que cada profissional encontre uma fragrância para diferentes estilos e ocasiões."
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

      <section className={styles.masthead} aria-labelledby="about-title">
        <Container className={styles.mastheadInner}>
          <div className={styles.mastheadHeader}>
            <span className={styles.mastheadLabel}>A marca</span>
            <h1 id="about-title">Elegância que permanece.</h1>
            <p className={styles.mastheadIntro}>
              Desde 2016 desenvolvendo fragrâncias que unem cuidado,
              personalidade e sofisticação para cães e gatos.
            </p>
          </div>

          <div className={styles.mastheadMedia}>
            <picture>
              <source srcSet="/images/about/about-origin.webp" type="image/webp" />
              <img
                src="/images/about/about-origin.jpg"
                alt="Poodle preto finalizado em um ambiente profissional sofisticado"
                width="1122"
                height="1402"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </Container>
      </section>

      <section className={styles.origin} aria-labelledby="origin-title">
        <Container className={styles.originGrid}>
          <Reveal className={styles.originYear}>
            <span>2016</span>
          </Reveal>

          <Reveal className={styles.originHeader}>
            <span className={styles.chapterLabel}>Capítulo 01 · Origem</span>
            <h2 id="origin-title">O começo de uma nova ideia.</h2>
          </Reveal>

          <Reveal className={styles.originNarrative} delay={80}>
            <p>
              A Vanity Pet nasceu em 2016 a partir de um conjunto de experiências
              no universo pet e de um propósito muito claro: apresentar um novo
              conceito de perfumaria para esse mercado.
            </p>
            <p>
              Desde o início, buscamos levar aos produtos a nossa própria
              identidade, desenvolvendo fragrâncias exclusivas, fascinantes e
              capazes de despertar sentidos e sentimentos em pets e seus
              tutores.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className={styles.article} aria-labelledby="article-title">
        <Container>
          <Reveal className={styles.articleHeader}>
            <span className={styles.chapterLabel}>Capítulo 02 · Identidade</span>
            <h2 id="article-title">Uma ideia que ganhou forma.</h2>
          </Reveal>

          <div className={styles.articleLayout}>
            <Reveal className={styles.articleBody}>
              <p>
                O conceito de qualidade, luxo e personalidade é levado a sério em
                cada fragrância desenvolvida pela Vanity Pet.
              </p>
              <p>
                Esse cuidado se estende por toda a experiência: desde o primeiro
                contato com a marca até o momento em que a fragrância chega ao
                pet.
              </p>
              <p>
                Mais do que criar aromas, a Vanity Pet busca construir uma
                identidade própria dentro do mercado e transformar a finalização
                em uma experiência marcante.
              </p>
            </Reveal>

            <Reveal
              as="blockquote"
              className={styles.articleQuote}
              delay={80}
            >
              “Qualidade, luxo e personalidade em cada fragrância.”
            </Reveal>

            <Reveal className={styles.articleMedia} delay={100}>
              <picture>
                <source
                  srcSet="/images/about/about-craft.webp"
                  type="image/webp"
                />
                <img
                  src="/images/about/about-craft.jpg"
                  alt="Profissional aplicando perfume como etapa final do cuidado de um cão"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </Reveal>

            <Reveal as="aside" className={styles.editorialNotes} delay={140}>
              <span>Princípios</span>
              <dl>
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
        <div className={styles.manifestoArtwork} aria-hidden="true" />
        <Container className={styles.manifestoInner}>
          <Reveal className={styles.manifestoCopy}>
            <h2 id="manifesto-title">
              Cada detalhe constrói a experiência.
            </h2>
          </Reveal>

          <Reveal className={styles.manifestoSeal} delay={90}>
            <div className={styles.sealOrbit} aria-hidden="true" />
            <img
              src="/brand/vanity-pet-logo.png"
              alt="Vanity Pet"
              width="500"
              height="300"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </Container>
      </section>

      <section
        className={styles.testimonials}
        aria-labelledby="testimonials-title"
      >
        <Container>
          <Reveal className={styles.testimonialsHeader}>
            <span className={styles.chapterLabel}>Mensagens institucionais</span>
            <h2 id="testimonials-title">Experiências que permanecem.</h2>
            <p>
              A fragrância acompanha o último gesto do cuidado e ajuda a construir
              uma lembrança entre o profissional, o pet e seu tutor.
            </p>
          </Reveal>

          <div className={styles.testimonialsList}>
            {testimonials.map((testimonial, index) => (
              <Reveal
                as="article"
                className={styles.testimonial}
                delay={index * 70}
                key={testimonial.context}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>
                <div>
                  <span>{testimonial.context}</span>
                  <p>{testimonial.statement}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        className={styles.recognition}
        aria-labelledby="recognition-title"
      >
        <Container className={styles.recognitionGrid}>
          <Reveal className={styles.recognitionTitle}>
            <span className={styles.chapterLabel}>
              Capítulo 03 · Reconhecimento
            </span>
            <h2 id="recognition-title">
              Reconhecimento construído no mercado.
            </h2>
          </Reveal>

          <Reveal className={styles.recognitionStory} delay={90}>
            <p>
              O compromisso com qualidade, inovação e identidade própria levou a
              Vanity Pet a conquistar destaque no setor, sendo sucesso de vendas
              por dois anos consecutivos durante a Pet South America.
            </p>
            <div className={styles.eventLine}>
              <strong>Pet South America</strong>
              <span>Sucesso de vendas por dois anos consecutivos</span>
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
              Nossa linha exclusiva de fragrâncias foi apenas o primeiro passo.
            </p>
            <p>
              A Vanity Pet continua desenvolvendo novas possibilidades para
              ampliar sua presença e levar ainda mais qualidade, identidade e
              personalidade ao universo pet.
            </p>
            <TextLink to="/produtos">Conheça nossos perfumes</TextLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export default About;
