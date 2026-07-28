import Container from "../Container/Container";
import Reveal from "../Reveal/Reveal";
import styles from "./PageHero.module.css";

function PageHero({ eyebrow, title, text, image, imageAlt, compact = false }) {
  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      {image && (
        <img
          className={styles.image}
          src={image}
          alt={imageAlt}
          width="1600"
          height="1000"
          fetchPriority="high"
        />
      )}
      <span className={styles.overlay} aria-hidden="true" />
      <Container className={styles.inner}>
        <Reveal className={styles.content}>
          <span className="eyebrow dark-eyebrow">{eyebrow}</span>
          <h1 className="page-title">{title}</h1>
          {text && <p>{text}</p>}
        </Reveal>
      </Container>
    </section>
  );
}

export default PageHero;
