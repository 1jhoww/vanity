import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

const linkGroups = [
  {
    title: "Institucional",
    links: [
      { label: "A Marca", to: "/a-marca" },
      { label: "Contato", to: "/contato" },
      { label: "Privacidade", to: "/politica-de-privacidade" }
    ]
  },
  {
    title: "Produtos",
    links: [
      { label: "Fragrâncias", to: "/produtos" },
      { label: "Coleção", to: "/linhas" },
      { label: "Onde Comprar", to: "/onde-comprar" }
    ]
  }
];

function Footer() {
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
            <p>
              Perfumes para cães e gatos, com apresentações para diferentes
              momentos e para o uso profissional.
            </p>
            <small>50 ml · 500 ml</small>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className={styles.social}>
            <h2>Atendimento</h2>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" size={17} /> Instagram
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={17} /> WhatsApp
            </a>
            <a href="mailto:contato@vanitypet.com.br">E-mail comercial</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Vanity Pet. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por <em>Hepta Studios</em>
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
