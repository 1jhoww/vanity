import {
  PrimaryButton,
  SecondaryButton
} from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import SEO from "../../components/SEO/SEO";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <SEO
        title="Página não encontrada"
        description="A página que você procura não foi encontrada."
        path="/404"
      />
      <section className={styles.notFound}>
        <Container className={styles.inner}>
          <span className={styles.code}>404</span>
          <div>
            <span className="eyebrow dark-eyebrow">Página não encontrada</span>
            <h1>Não encontramos esta página.</h1>
            <p>
              O endereço pode ter mudado. Volte ao início ou acesse o catálogo
              de perfumes.
            </p>
            <div className={styles.actions}>
              <PrimaryButton to="/">Voltar ao início</PrimaryButton>
              <SecondaryButton to="/fragrancias">
                Ver fragrâncias
              </SecondaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default NotFound;
