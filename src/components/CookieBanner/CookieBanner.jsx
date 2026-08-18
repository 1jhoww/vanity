import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_KEY,
  COOKIE_PREFERENCES_EVENT,
  createNecessaryOnlyConsent,
  hasCurrentCookieConsent
} from "../../config/cookieConsent";
import styles from "./CookieBanner.module.css";

function readStoredConsent() {
  try {
    const storedValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch {
    return null;
  }
}

function CookieBanner() {
  const [visible, setVisible] = useState(
    () => !hasCurrentCookieConsent(readStoredConsent())
  );

  useEffect(() => {
    const openPreferences = () => setVisible(true);
    window.addEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);

    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);
    };
  }, []);

  const keepNecessaryOnly = () => {
    const consent = createNecessaryOnlyConsent();

    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    } catch {
      // The choice still applies to the current visit when storage is blocked.
    }

    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_CHANGE_EVENT, { detail: consent })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className={styles.banner}
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className={styles.copy}>
        <span>Privacidade e transparência</span>
        <h2 id="cookie-banner-title">Cookies sob seu controle.</h2>
        <p id="cookie-banner-description">
          Este site não utiliza cookies de análise ou marketing. Armazenamos
          apenas sua preferência sobre este aviso no navegador para que ele não
          reapareça.
        </p>
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={keepNecessaryOnly}>
          Continuar somente com necessários
        </button>
        <Link to="/politica-de-cookies">Política de Cookies</Link>
      </div>
    </aside>
  );
}

export default CookieBanner;
