import { SecondaryButton } from "../Button/Button";
import styles from "./CatalogEmptyState.module.css";

function CatalogEmptyState({ onReset }) {
  return (
    <section className={styles.empty} aria-labelledby="catalog-empty-title">
      <span>Busca sem correspondência</span>
      <h2 id="catalog-empty-title">Nenhuma fragrância encontrada.</h2>
      <p>
        Experimente outro nome, inspiração ou selecione uma família diferente.
      </p>
      <SecondaryButton type="button" onClick={onReset}>
        Limpar busca e filtros
      </SecondaryButton>
    </section>
  );
}

export default CatalogEmptyState;
