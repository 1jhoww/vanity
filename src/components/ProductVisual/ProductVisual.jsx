import styles from "./ProductVisual.module.css";

function ProductVisual({
  product,
  presentation = product.sizes[0],
  size = "showcase",
  className = "",
  priority = false
}) {
  const { volume, image, srcSet, width = 1024, height = 1536 } = presentation;
  const hasImage = Boolean(image);

  return (
    <figure
      className={[
        styles.visual,
        styles[size] || "",
        styles[product.visualTone] || "",
        hasImage ? styles.withImage : styles.placeholderVisual,
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hasImage ? (
        <img
          src={image}
          srcSet={srcSet || undefined}
          sizes="(max-width: 620px) 78vw, (max-width: 920px) 82vw, 48vw"
          alt={`${product.name}, apresentação ${volume}`}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      ) : (
        <div
          className={styles.placeholder}
          role="img"
          aria-label={`Imagem da apresentação ${volume} de ${product.name} em atualização`}
        >
          <span aria-hidden="true" className={styles.placeholderMark} />
          <small>Imagem em atualização</small>
          <strong>{volume}</strong>
        </div>
      )}
      <figcaption>{volume}</figcaption>
    </figure>
  );
}

export default ProductVisual;
