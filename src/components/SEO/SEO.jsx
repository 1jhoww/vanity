import { useEffect } from "react";

const SITE_NAME = "Vanity Pet";
const BASE_URL = "https://www.vanitypet.com.br";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function removeMeta(attribute, key) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
}

function SEO({
  title,
  description,
  path = "/",
  type = "website",
  image = null,
  schema
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | Perfumes para cães e gatos`;
    const canonicalUrl = `${BASE_URL}${path}`;
    const imageUrl = image
      ? image.startsWith("http")
        ? image
        : `${BASE_URL}${image}`
      : null;

    document.title = fullTitle;
    document.documentElement.lang = "pt-BR";
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    if (imageUrl) {
      setMeta("property", "og:image", imageUrl);
      setMeta("name", "twitter:image", imageUrl);
    } else {
      removeMeta("property", "og:image");
      removeMeta("name", "twitter:image");
    }

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    let structuredData = document.head.querySelector("#structured-data");
    if (schema) {
      if (!structuredData) {
        structuredData = document.createElement("script");
        structuredData.id = "structured-data";
        structuredData.type = "application/ld+json";
        document.head.appendChild(structuredData);
      }
      structuredData.textContent = JSON.stringify(schema);
    } else if (structuredData) {
      structuredData.remove();
    }
  }, [description, image, path, schema, title, type]);

  return null;
}

export default SEO;
