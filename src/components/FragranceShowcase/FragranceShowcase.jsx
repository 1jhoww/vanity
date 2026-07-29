import { getInspirationText } from "../../data/products";
import { TextLink } from "../Button/Button";
import styles from "./FragranceShowcase.module.css";

function FragranceShowcase({
  product,
  headingLevel = 2,
  className = ""
}) {
  const Heading = `h${headingLevel}`;

  return (
    <article className={[styles.showcase, className].filter(Boolean).join(" ")}>
      <div className={styles.media}>
        <img
          src={product.catalogArtwork.src}
          alt={`${product.name}: frascos de 50 ml e 500 ml apresentados juntos`}
          width={product.catalogArtwork.width}
          height={product.catalogArtwork.height}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.content}>
        <span className={styles.family}>{product.family}</span>
        <Heading>{product.name}</Heading>
        <p className={styles.inspiration}>{getInspirationText(product)}</p>
        <p className={styles.description}>{product.shortDescription}</p>

        <div className={styles.volumes}>
          <span>50 ml</span>
          <span aria-hidden="true">·</span>
          <span>500 ml</span>
        </div>

        <TextLink
          to={product.route}
          aria-label={`Conheça a fragrância ${product.name}`}
          tone="gold"
        >
          Conheça a fragrância
        </TextLink>
      </div>
    </article>
  );
}

export default FragranceShowcase;
