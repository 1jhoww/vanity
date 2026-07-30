import { useEffect, useMemo, useState } from "react";
import CatalogEmptyState from "../../components/CatalogEmptyState/CatalogEmptyState";
import CatalogFilters from "../../components/CatalogFilters/CatalogFilters";
import CatalogSearch from "../../components/CatalogSearch/CatalogSearch";
import Container from "../../components/Container/Container";
import FragranceCard from "../../components/FragranceCard/FragranceCard";
import SEO from "../../components/SEO/SEO";
import {
  fragranceFamilies,
  fragrances,
  getInspirationText,
  normalizeCatalogSearch
} from "../../data/products";
import styles from "./Products.module.css";

const SEARCH_DELAY = 180;

function Products() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeFamily, setActiveFamily] = useState("all");

  const catalogFragrances = useMemo(
    () => fragrances.filter((fragrance) => fragrance.available !== false),
    []
  );

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setDebouncedSearch(search),
      SEARCH_DELAY
    );

    return () => window.clearTimeout(timeout);
  }, [search]);

  const filteredFragrances = useMemo(() => {
    const term = normalizeCatalogSearch(debouncedSearch);

    return catalogFragrances.filter((fragrance) => {
      const searchable = normalizeCatalogSearch(
        [
          fragrance.name,
          fragrance.family,
          fragrance.shortDescription,
          fragrance.inspiration,
          getInspirationText(fragrance)
        ].join(" ")
      );

      return (
        (!term || searchable.includes(term)) &&
        (activeFamily === "all" || fragrance.familyId === activeFamily)
      );
    });
  }, [activeFamily, catalogFragrances, debouncedSearch]);

  const hasActiveSelection =
    Boolean(debouncedSearch.trim()) || activeFamily !== "all";
  const resultCount = filteredFragrances.length;
  const resultLabel = hasActiveSelection
    ? `${resultCount} ${
        resultCount === 1 ? "resultado encontrado" : "resultados encontrados"
      }`
    : `${catalogFragrances.length} fragrâncias`;

  const clearSearch = () => {
    setSearch("");
    setDebouncedSearch("");
  };

  const resetCatalog = () => {
    clearSearch();
    setActiveFamily("all");
  };

  return (
    <>
      <SEO
        title="Fragrâncias"
        description="Explore 19 fragrâncias importadas Vanity Pet: perfumaria pet premium com fórmulas hipoalergênicas para cães e gatos."
        path="/fragrancias"
      />

      <section className={styles.catalog} aria-labelledby="catalog-title">
        <Container className={styles.catalogInner}>
          <header className={styles.opening}>
            <span className={styles.eyebrow}>Fragrâncias</span>
            <h1 id="catalog-title">Encontre sua assinatura.</h1>
            <p>
              Dezenove fragrâncias importadas, com fórmulas hipoalergênicas e
              perfis marcantes para transformar o último gesto do cuidado em
              alta perfumaria pet.
            </p>
          </header>

          <div className={styles.discovery}>
            <div className={styles.searchRow}>
              <CatalogSearch
                value={search}
                onChange={setSearch}
                onClear={clearSearch}
                resultDescriptionId="catalog-result-count"
              />
              <p
                id="catalog-result-count"
                className={styles.resultCount}
                aria-live="polite"
              >
                {resultLabel}
              </p>
            </div>

            <CatalogFilters
              filters={fragranceFamilies}
              activeFilter={activeFamily}
              onChange={setActiveFamily}
            />
          </div>

          {filteredFragrances.length > 0 ? (
            <div
              id="catalog-results"
              className={styles.list}
              aria-label="Fragrâncias encontradas"
            >
              {filteredFragrances.map((fragrance, index) => (
                <FragranceCard
                  key={fragrance.id}
                  product={fragrance}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div id="catalog-results">
              <CatalogEmptyState onReset={resetCatalog} />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

export default Products;
