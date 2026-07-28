import styles from "./SectionTitle.module.css";

function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
  className = ""
}) {
  return (
    <header
      className={`${styles.header} ${styles[align]} ${light ? styles.light : ""} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  );
}

export default SectionTitle;
