import { useEffect } from "react";
import { siteInfo } from "../../config/site";

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

function toAbsoluteUrl(value) {
  return new URL(value, `${siteInfo.baseUrl}/`).toString();
}

function SEO({
  title,
  description = siteInfo.description,
  path = "/",
  type = "website",
  image = siteInfo.socialImage,
  imageAlt = siteInfo.socialImageAlt,
  schema,
  titleTemplate = true,
  robots = "index,follow",
  canonical = true
}) {
  useEffect(() => {
    const fullTitle = title
      ? titleTemplate
        ? `${title} | ${siteInfo.name}`
        : title
      : siteInfo.title;
    const canonicalUrl = toAbsoluteUrl(path);
    const imageUrl = image ? toAbsoluteUrl(image) : null;

    document.title = fullTitle;
    document.documentElement.lang = "pt-BR";
    setMeta("name", "description", description);
    setMeta("name", "robots", robots);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", siteInfo.name);
    setMeta("property", "og:locale", "pt_BR");
    setMeta("name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:url", canonicalUrl);
    if (imageUrl) {
      setMeta("property", "og:image", imageUrl);
      setMeta("property", "og:image:alt", imageAlt);
      setMeta("name", "twitter:image", imageUrl);
      setMeta("name", "twitter:image:alt", imageAlt);
    } else {
      removeMeta("property", "og:image");
      removeMeta("property", "og:image:alt");
      removeMeta("name", "twitter:image");
      removeMeta("name", "twitter:image:alt");
    }

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else if (canonical !== false) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    if (canonical === false) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
    }

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
  }, [
    canonical,
    description,
    image,
    imageAlt,
    path,
    robots,
    schema,
    title,
    titleTemplate,
    type
  ]);

  return null;
}

export default SEO;
