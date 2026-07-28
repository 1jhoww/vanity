import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import Container from "../Container/Container";
import styles from "./Header.module.css";

const navigation = [
  { label: "Home", to: "/" },
  { label: "A Marca", to: "/a-marca" },
  { label: "Fragrâncias", to: "/produtos" },
  { label: "Coleção", to: "/linhas" },
  { label: "Onde Comprar", to: "/onde-comprar" },
  { label: "Contato", to: "/contato" }
];

function NavigationLinks({ mobile = false, mobileTabIndex, onNavigate }) {
  return navigation.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.to === "/"}
      onClick={onNavigate}
      tabIndex={mobile ? mobileTabIndex : undefined}
    >
      {item.label}
    </NavLink>
  ));
}

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuPanelRef = useRef(null);
  const menuButtonRef = useRef(null);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 22);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const panel = menuPanelRef.current;
    const focusable = () =>
      [...panel.querySelectorAll('a[href], button:not([disabled])')].filter(
        (element) => element.tabIndex !== -1
      );

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }

      if (event.key === "Tab") {
        const elements = focusable();
        if (!elements.length) return;
        const first = elements[0];
        const last = elements[elements.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const firstLink = panel.querySelector('a[href]');
    requestAnimationFrame(() => firstLink?.focus());
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={[
          styles.header,
          isHome ? styles.onHero : styles.solid,
          scrolled ? styles.scrolled : "",
          open ? styles.menuIsOpen : ""
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Container className={styles.inner}>
          <Link className={styles.logo} to="/" aria-label="Vanity Pet — página inicial">
            <img
              src="/brand/vanity-pet-logo.png"
              alt="Vanity Pet"
              width="500"
              height="300"
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Navegação principal">
            <NavigationLinks />
          </nav>

          <button
            ref={menuButtonRef}
            className={styles.menuButton}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span>{open ? "Fechar" : "Menu"}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </Container>
      </header>

      <aside
        ref={menuPanelRef}
        id="mobile-navigation"
        className={[styles.mobilePanel, open ? styles.mobileOpen : ""]
          .filter(Boolean)
          .join(" ")}
        aria-label="Navegação mobile"
        aria-hidden={!open}
      >
        <div className={styles.mobileEyebrow}>Vanity Pet · Perfumaria pet</div>
        <nav>
          <NavigationLinks
            mobile
            mobileTabIndex={open ? 0 : -1}
            onNavigate={() => setOpen(false)}
          />
        </nav>
        <div className={styles.mobileFooter}>
          <p>Fragrâncias para cães e gatos.</p>
          <Link to="/contato" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            Atendimento comercial
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Header;
