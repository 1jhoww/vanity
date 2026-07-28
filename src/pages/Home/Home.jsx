import Button, {
  PrimaryButton,
  SecondaryButton,
  TextLink
} from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import { fragrances } from "../../data/products";
import styles from "./Home.module.css";

const availableVolumes = Array.from(
  new Set(
    fragrances
      .filter((fragrance) => fragrance.available !== false)
      .flatMap((fragrance) => fragrance.sizes.map((size) => size.volume))
      .filter(Boolean)
  )
);

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
              <Button to="/produtos">Conheça os perfumes</Button>
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
            <TextLink to="/produtos">
              Explorar perfumes
            </TextLink>
          </Reveal>
        </Container>
      </section>

      <section className={styles.profiles}>
        <Container>
          <Reveal className={styles.profilesHeader}>
            <span className="eyebrow dark-eyebrow">Perfis de fragrância</span>
            <h2>Descubra diferentes perfis.</h2>
            <p>
              De fragrâncias florais e delicadas a opções frutadas e marcantes,
              o portfólio reúne diferentes propostas para estilos e momentos
              diversos.
            </p>
          </Reveal>

          <div className={styles.profileList}>
            <article className={`${styles.profile} ${styles.profileFloral}`}>
              <Reveal className={styles.profileCopy}>
                <small>Perfil floral</small>
                <h3>Fragrâncias florais</h3>
                <p>
                  Perfis delicados, elegantes e marcantes, criados para quem
                  prefere uma presença floral no cuidado diário.
                </p>
                <PrimaryButton to="/produtos">Explorar perfumes</PrimaryButton>
              </Reveal>
              <Reveal className={styles.profileMedia} delay={80}>
                <picture>
                  <source
                    srcSet="/images/home/fragrance-families/banner-flowers.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/home/fragrance-families/banner-flowers.png"
                    alt="Perfumes Flowers de 500 ml e 50 ml em composição floral roxa"
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </Reveal>
            </article>

            <article className={`${styles.profile} ${styles.profileFruit}`}>
              <Reveal className={styles.profileCopy}>
                <small>Perfil frutado</small>
                <h3>Fragrâncias frutadas</h3>
                <p>
                  Opções mais vivas e expressivas, com propostas que trazem
                  personalidade e presença.
                </p>
                <PrimaryButton to="/produtos">Explorar perfumes</PrimaryButton>
              </Reveal>
              <Reveal className={styles.profileMedia} delay={80}>
                <picture>
                  <source
                    srcSet="/images/home/fragrance-families/banner-strawberry.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/home/fragrance-families/banner-strawberry.png"
                    alt="Perfumes Strawberry de 500 ml e 50 ml com morangos"
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </Reveal>
            </article>
          </div>
        </Container>
      </section>

      <section className={`section ${styles.formats}`}>
        <Container className={styles.formatsGrid}>
          <Reveal className={styles.formatCopy}>
            <span className="eyebrow dark-eyebrow">
              {availableVolumes.join(" · ")}
            </span>
            <h2>Diferentes apresentações para diferentes rotinas.</h2>
            <p>
              Consulte os formatos disponíveis em cada fragrância e conheça o
              portfólio completo.
            </p>
            <PrimaryButton to="/produtos">Explorar o portfólio</PrimaryButton>
          </Reveal>
          <Reveal className={styles.formatDisplay} delay={80}>
            <div role="list" aria-label="Apresentações disponíveis">
              {availableVolumes.map((volume, index) => (
                <article key={volume} role="listitem">
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{volume}</strong>
                  <span>Apresentação disponível</span>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={styles.professional}>
        <div className={styles.professionalImage}>
          <img
            src="/campaign/professional-pet.webp"
            alt="Profissional atendendo um cão"
            width="1440"
            height="960"
            loading="lazy"
          />
        </div>
        <Container className={styles.professionalGrid}>
          <Reveal className={styles.professionalCopy}>
            <span className="eyebrow dark-eyebrow">Mercado profissional</span>
            <h2>Perfumes para o mercado profissional.</h2>
            <p>
              Conheça as apresentações disponíveis para groomers, pet shops e
              distribuidores.
            </p>
            <PrimaryButton to="/contato">Falar com o comercial</PrimaryButton>
          </Reveal>
        </Container>
      </section>

      <nav className={styles.finalLinks} aria-label="Atalhos principais">
        <article className={styles.finalLink}>
          <div>
            <small>Onde encontrar</small>
            <h2>Encontre um ponto de venda.</h2>
          </div>
          <PrimaryButton to="/onde-comprar">
            Ver pontos de venda
          </PrimaryButton>
        </article>
        <article className={styles.finalLink}>
          <div>
            <small>Contato</small>
            <h2>Fale com a nossa equipe.</h2>
          </div>
          <SecondaryButton to="/contato">Entrar em contato</SecondaryButton>
        </article>
      </nav>
    </>
  );
}

export default Home;
