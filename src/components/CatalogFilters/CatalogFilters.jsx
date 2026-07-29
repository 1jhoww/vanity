import styles from "./CatalogFilters.module.css";

function CatalogFilters({ filters, activeFilter, onChange }) {
  return (
    <div className={styles.scroller}>
      <div className={styles.filters} role="group" aria-label="Filtrar por família olfativa">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              type="button"
              className={isActive ? styles.active : ""}
              onClick={() => onChange(filter.id)}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CatalogFilters;
