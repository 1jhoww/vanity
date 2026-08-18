import { Link } from "react-router";
import Container from "../Container/Container";
import PageHero from "../PageHero/PageHero";
import SEO from "../SEO/SEO";
import styles from "./LegalPage.module.css";

const legalLinks = [
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  { label: "Política de Cookies", to: "/politica-de-cookies" },
  { label: "Termos de Uso", to: "/termos-de-uso" }
];

function LegalPage({
  title,
  description,
  path,
  eyebrow,
  heroText,
  intro,
  children
}) {
  return (
    <>
      <SEO title={title} description={description} path={path} />
      <PageHero
        eyebrow={eyebrow}
        title={`${title}.`}
        text={heroText}
        compact
      />

      <section className={`section ${styles.legal}`}>
        <Container className={styles.layout}>
          <aside className={styles.aside}>
            <div className={styles.updated}>
              <span>Última atualização</span>
              <strong>18 de agosto de 2026</strong>
            </div>

            <nav aria-label="Documentos jurídicos relacionados">
              <span>Transparência</span>
              {legalLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={item.to === path ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <article className={styles.content}>
            <p className={styles.intro}>{intro}</p>
            {children}
          </article>
        </Container>
      </section>
    </>
  );
}

export default LegalPage;
