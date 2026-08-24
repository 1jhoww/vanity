import Button, {
  PrimaryButton,
  TextLink
} from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import { brandInfo, contactInfo, siteInfo } from "../../config/site";
import styles from "./Home.module.css";

const fragranceGroups = [
  {
    familyId: "floral",
    label: "Florais",
    title: "Fragrâncias florais",
    description:
      "Composições importadas de alta qualidade, delicadas e elegantes, para uma assinatura marcante com acabamento sofisticado.",
    file: "florais",
    alt: "Perfumes Flowers Vanity Pet de 500 ml e 50 ml entre flores roxas"
  },
  {
    familyId: "fruity",
    label: "Frutadas",
    title: "Fragrâncias frutadas",
    description:
      "Perfis vibrantes que unem matérias-primas selecionadas, personalidade e uma formulação delicada para o cuidado diário.",
    file: "frutadas-novo",
    hasWebp: false,
    alt: "Perfumes Mango e Strawberry Vanity Pet entre frutas"
  },
  {
    familyId: "gourmand",
    label: "Doces / Gourmand",
    title: "Fragrâncias doces e gourmand",
    description:
      "Acordes envolventes e acolhedores para uma experiência de perfumaria pet premium, marcante e memorável.",
    file: "doces",
    alt: "Perfumes Sweet e Illusion Vanity Pet com chocolate, baunilha e caramelo"
  },
  {
    familyId: "fresh",
    label: "Frescas / Cítricas",
    title: "Fragrâncias frescas e cítricas",
    description:
      "Fragrâncias importadas de perfil leve e luminoso, com frescor limpo e acabamento contemporâneo.",
    file: "citricas-novo",
    hasWebp: false,
    alt: "Perfumes Explosion e Citric Vanity Pet com frutas cítricas"
  },
  {
    familyId: "intense",
    label: "Intensas / Elegantes",
    title: "Fragrâncias intensas e elegantes",
    description:
      "Assinaturas de alta perfumaria, com presença marcante e sofisticação para uma finalização inesquecível.",
    file: "intensas",
    alt: "Perfumes Gold e Black Vanity da Vanity Pet em composição preta e dourada"
  }
];

function Home() {
  return (
    <>
      <SEO
        title={siteInfo.title}
        titleTemplate={false}
        description={siteInfo.description}
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteInfo.baseUrl}/#organization`,
              name: siteInfo.name,
              url: `${siteInfo.baseUrl}/`,
              logo: `${siteInfo.baseUrl}/brand/vanity-pet-logo.png`,
              email: contactInfo.email,
              telephone: `+${contactInfo.phoneRaw}`,
              sameAs: [contactInfo.instagramUrl],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: `+${contactInfo.phoneRaw}`,
                email: contactInfo.email,
                availableLanguage: "Portuguese"
              }
            },
            {
              "@type": "WebSite",
              "@id": `${siteInfo.baseUrl}/#website`,
              name: siteInfo.name,
              alternateName: siteInfo.alternateName,
              url: `${siteInfo.baseUrl}/`,
              publisher: {
                "@id": `${siteInfo.baseUrl}/#organization`
              }
            }
          ]
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
            <span className={styles.heroKicker}>Perfumaria pet premium</span>
            <h1>
              Vanity <span>Pet</span>
            </h1>
            <p>
              Presença que deixa marca. Fragrâncias importadas e fórmulas
              hipoalergênicas para uma experiência de perfumaria pet
              sofisticada.
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
              {brandInfo.legalRelationship} A marca é dedicada à perfumaria e
              aos cosméticos para cães e gatos, com fragrâncias importadas,
              fórmulas hipoalergênicas e apresentações para o cuidado pessoal e
              profissional.
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
              Uma curadoria de perfis olfativos marcantes, criada para unir alta
              perfumaria, cuidado e personalidade.
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
                    {group.hasWebp !== false && (
                      <source
                        srcSet={`/images/home/fragrance-groups/${group.file}.webp`}
                        type="image/webp"
                      />
                    )}
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
                  <PrimaryButton
                    to={`/fragrancias?categoria=${group.familyId}`}
                  >
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
