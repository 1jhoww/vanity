import { TextLink } from "../Button/Button";
import ProductVisual from "../ProductVisual/ProductVisual";
import styles from "./FragranceShowcase.module.css";

function FragranceShowcase({
  product,
  imagePosition = "left",
  variant = "wide",
  headingLevel = 2,
  actionTone = "gold",
  className = ""
}) {
  const Heading = `h${headingLevel}`;
  const presentations = product.sizes.filter((size) => size.volume);
  const photographed = presentations.filter((size) => size.image);
  const pending = presentations.filter((size) => !size.image);
  const mediaMode =
    photographed.length === 0
      ? styles.noPhotos
      : photographed.length === 1
        ? styles.onePhoto
        : styles.multiPhoto;

  return (
    <article
      className={[
        styles.showcase,
        styles[imagePosition],
        styles[variant],
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[styles.media, mediaMode].join(" ")}
        style={{
          "--photo-count": Math.min(Math.max(photographed.length, 1), 4),
          "--presentation-count": Math.min(Math.max(presentations.length, 1), 4)
        }}
      >
        {photographed.map((presentation) => (
          <ProductVisual
            key={`${product.id}-${presentation.volume}`}
            product={product}
            presentation={presentation}
            size={variant === "compact" ? "compact" : "showcase"}
          />
        ))}
        {pending.map((presentation) => (
          <ProductVisual
            key={`${product.id}-${presentation.volume}`}
            product={product}
            presentation={presentation}
            size={variant === "compact" ? "compact" : "showcase"}
            className={styles.pendingVisual}
          />
        ))}
      </div>

      <div className={styles.content}>
        {(product.isNew || product.collection) && (
          <div className={styles.labels}>
            {product.isNew && <span className={styles.newLabel}>Lançamento</span>}
            {product.collection && <span>{product.collection}</span>}
          </div>
        )}
        <Heading>{product.name}</Heading>
        <p>{product.shortDescription}</p>

        <div className={styles.volumes}>
          <span>Volumes</span>
          <ul>
            {presentations.map((presentation) => (
              <li key={presentation.volume} data-ready={Boolean(presentation.image)}>
                {presentation.volume}
              </li>
            ))}
          </ul>
        </div>

        <TextLink
          to={`/produtos/${product.slug}`}
          aria-label={`Conheça a fragrância ${product.name}`}
          tone={actionTone}
        >
          Conheça a fragrância
        </TextLink>
      </div>
    </article>
  );
}

export default FragranceShowcase;
