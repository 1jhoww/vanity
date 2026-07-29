import { Search, X } from "lucide-react";
import styles from "./CatalogSearch.module.css";

function CatalogSearch({ value, onChange, onClear, resultDescriptionId }) {
  return (
    <div className={styles.search} role="search">
      <label className="sr-only" htmlFor="catalog-search">
        Buscar por fragrância ou inspiração
      </label>
      <Search className={styles.icon} aria-hidden="true" size={20} strokeWidth={1.5} />
      <input
        id="catalog-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar fragrância ou inspiração"
        autoComplete="off"
        enterKeyHint="search"
        aria-controls="catalog-results"
        aria-describedby={resultDescriptionId}
      />
      {value && (
        <button type="button" onClick={onClear} aria-label="Limpar busca">
          <X aria-hidden="true" size={18} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}

export default CatalogSearch;
