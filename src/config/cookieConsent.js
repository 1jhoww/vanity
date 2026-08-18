export const COOKIE_CONSENT_KEY = "vanitypet_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_PREFERENCES_EVENT = "vanitypet:open-cookie-preferences";
export const COOKIE_CONSENT_CHANGE_EVENT = "vanitypet:cookie-consent-change";

export function createNecessaryOnlyConsent() {
  return {
    version: COOKIE_CONSENT_VERSION,
    decision: "necessary-only",
    categories: {
      necessary: true,
      analytics: false,
      marketing: false
    }
  };
}

export function hasCurrentCookieConsent(value) {
  return (
    value?.version === COOKIE_CONSENT_VERSION &&
    value?.categories?.necessary === true
  );
}
