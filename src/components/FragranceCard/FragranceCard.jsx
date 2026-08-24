import { SecondaryButton } from "../Button/Button";
import { getInspirationText } from "../../data/products";
import styles from "./FragranceCard.module.css";

function FragranceCard({ product, index }) {
  const artwork = product.catalogArtwork;
  const headingId = `fragrance-${product.id}`;

  return (
    <article
      className={`${styles.card} ${index % 2 === 1 ? styles.reverse : ""}`}
      aria-labelledby={headingId}
    >
      <div className={styles.media}>
        <img
          className={styles.image}
          src={artwork.src}
          alt={`Perfume ${product.name} Vanity Pet em frascos de 50 ml e 500 ml`}
          width={artwork.width}
          height={artwork.height}
          style={{
            "--artwork-scale": artwork.scale,
            "--artwork-position": artwork.position
          }}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.content}>
        <span className={styles.family}>{product.family}</span>
        <h2 id={headingId}>{product.name}</h2>
        <p className={styles.inspiration}>{getInspirationText(product)}</p>
        <p>{product.shortDescription}</p>
        <span className={styles.volumes}>Disponível em 50 ml e 500 ml</span>
        <SecondaryButton
          to={product.route}
          className={styles.action}
          aria-label={`Saiba mais sobre a fragrância ${product.name}`}
        >
          Saiba mais
        </SecondaryButton>
      </div>
    </article>
  );
}

export default FragranceCard;
