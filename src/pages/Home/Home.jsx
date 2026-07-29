import Button, {
  PrimaryButton,
  TextLink
} from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import styles from "./Home.module.css";

const fragranceGroups = [
  {
    label: "Florais",
    title: "Fragrâncias florais",
    description:
      "Perfis delicados e elegantes desenvolvidos para quem procura fragrâncias marcantes e sofisticadas.",
    file: "florais",
    alt: "Perfumes Flowers de 500 ml e 50 ml entre flores roxas"
  },
  {
    label: "Frutadas",
    title: "Fragrâncias frutadas",
    description:
      "Perfis vibrantes e expressivos, com combinações que trazem leveza, energia e personalidade ao cuidado diário.",
    file: "frutadas",
    alt: "Perfumes Mango de 500 ml e Strawberry de 50 ml entre frutas"
  },
  {
    label: "Doces / Gourmand",
    title: "Fragrâncias doces e gourmand",
    description:
      "Composições envolventes e acolhedoras, com presença adocicada para momentos de cuidado memoráveis.",
    file: "doces",
    alt: "Perfumes Sweet de 500 ml e Illusion de 50 ml com chocolate, baunilha e caramelo"
  },
  {
    label: "Frescas / Cítricas",
    title: "Fragrâncias frescas e cítricas",
    description:
      "Perfis leves e luminosos, pensados para transmitir frescor e uma sensação limpa e revigorante.",
    file: "citricas",
    alt: "Perfumes Explosion de 500 ml e Citric de 50 ml com frutas cítricas"
  },
  {
    label: "Intensas / Elegantes",
    title: "Fragrâncias intensas e elegantes",
    description:
      "Fragrâncias de presença marcante e acabamento sofisticado, criadas para quem prefere uma assinatura mais intensa.",
    file: "intensas",
    alt: "Perfumes Gold de 500 ml e Black Vanity de 50 ml em composição preta e dourada"
  }
];

function Home() {
  return (
    <>
      <SEO
        description="Perfumes para cães e gatos com personalidade, sofisticação e identidade."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vanity Pet",
          url: "https://www.vanitypet.com.br",
          logo: "https://www.vanitypet.com.br/brand/vanity-pet-logo.png"
        }}
      />

      <section className={styles.hero}>
        <picture className={styles.heroPicture}>
          <source srcSet="/images/home/hero-vanity-pet.webp" type="image/webp" />
          <img
            src="/images/home/hero-vanity-pet.png"
            alt="Perfumes Illusion Vanity Pet ao lado de um cão em iluminação dourada"
            width="1774"
            height="887"
            fetchPriority="high"
          />
        </picture>
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.heroKicker}>Perfumes para cães e gatos</span>
            <h1>
              Presença que <span>deixa marca.</span>
            </h1>
            <p>
              Fragrâncias criadas para transformar o cuidado em uma experiência
              de personalidade, presença e sofisticação.
            </p>
            <div className={styles.heroActions}>
              <Button to="/fragrancias">Conheça os perfumes</Button>
              <Button to="/contato" variant="outline">
                Fale com nossa equipe
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className={`section ${styles.intro}`}>
        <Container className={styles.introGrid}>
          <Reveal>
            <span className="eyebrow dark-eyebrow">Perfumaria pet</span>
            <h2>Um perfume para cada personalidade.</h2>
          </Reveal>
          <Reveal className={styles.introCopy} delay={80}>
            <p>
              Descubra fragrâncias criadas para diferentes estilos e momentos,
              disponíveis em formatos para uso pessoal e profissional.
            </p>
            <TextLink to="/fragrancias">
              Explorar perfumes
            </TextLink>
          </Reveal>
        </Container>
      </section>

      <section className={styles.fragranceGroups}>
        <Container className={styles.groupsHeader}>
          <Reveal>
            <span className="eyebrow dark-eyebrow">Perfis de fragrância</span>
            <h2>Descubra diferentes perfis.</h2>
            <p>
              Um universo de fragrâncias para diferentes estilos, momentos e
              formas de presença.
            </p>
          </Reveal>
        </Container>

        <div className={styles.groupsList}>
          {fragranceGroups.map((group, index) => (
            <article
              className={[
                styles.fragranceGroup,
                index % 2 === 1 ? styles.groupReverse : ""
              ]
                .filter(Boolean)
                .join(" ")}
              key={group.file}
            >
              <Container className={styles.groupInner}>
                <Reveal className={styles.groupMedia} delay={80}>
                  <picture>
                    <source
                      srcSet={`/images/home/fragrance-groups/${group.file}.webp`}
                      type="image/webp"
                    />
                    <img
                      src={`/images/home/fragrance-groups/${group.file}.png`}
                      alt={group.alt}
                      width="1023"
                      height="1537"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </Reveal>
                <Reveal className={styles.groupCopy}>
                  <small>{group.label}</small>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <PrimaryButton to="/fragrancias">
                    Explorar perfumes
                  </PrimaryButton>
                </Reveal>
              </Container>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
