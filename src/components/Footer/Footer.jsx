import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import {
  brandInfo,
  contactInfo,
  developerCredit
} from "../../config/site";
import { COOKIE_PREFERENCES_EVENT } from "../../config/cookieConsent";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

const navigation = [
  { label: "A Marca", to: "/a-marca" },
  { label: "Fragrâncias", to: "/fragrancias" },
  { label: "Onde Comprar", to: "/onde-comprar" },
  { label: "Contato", to: "/contato" }
];

const legalNavigation = [
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  { label: "Política de Cookies", to: "/politica-de-cookies" },
  { label: "Termos de Uso", to: "/termos-de-uso" }
];

function Footer() {
  const openCookiePreferences = () => {
    window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link className={styles.logo} to="/" aria-label="Vanity Pet — página inicial">
              <img
                src="/brand/vanity-pet-logo.png"
                alt="Vanity Pet"
                width="500"
                height="300"
                loading="lazy"
              />
            </Link>
            <p className={styles.brandDescription}>{brandInfo.description}</p>
            <p className={styles.relationship}>
              {brandInfo.legalRelationship}
            </p>
          </div>

          <nav className={styles.navigation} aria-label="Navegação do rodapé">
            <h2>Navegação</h2>
            {navigation.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.contact}>
            <h2>Contato</h2>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${contactInfo.instagramHandle}`}
            >
              <Instagram aria-hidden="true" size={17} />
              {contactInfo.instagramHandle}
            </a>
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${contactInfo.phoneDisplay}`}
            >
              <MessageCircle aria-hidden="true" size={17} />
              {contactInfo.phoneDisplay}
            </a>
            <a href={contactInfo.emailUrl}>
              <Mail aria-hidden="true" size={17} />
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <span>
              © {new Date().getFullYear()} {brandInfo.name}. Todos os direitos
              reservados.
            </span>
            <nav className={styles.legal} aria-label="Políticas e termos">
              {legalNavigation.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
              <button type="button" onClick={openCookiePreferences}>
                Preferências de cookies
              </button>
            </nav>
          </div>

          <div
            className={styles.credit}
            aria-label="Créditos do site"
          >
            <span className={styles.creditLabel}>Criação digital</span>
            <a
              className={styles.creditLogo}
              href={developerCredit.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Site oficial da ${developerCredit.name}`}
            >
              <img
                src={developerCredit.logoSrc}
                alt=""
                width="1536"
                height="1024"
                loading="lazy"
              />
            </a>
            <a
              className={styles.creditInstagram}
              href={developerCredit.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram da ${developerCredit.name} — ${developerCredit.instagramHandle}`}
            >
              <Instagram aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
