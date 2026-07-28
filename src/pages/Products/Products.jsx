import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { SecondaryButton } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import FragranceShowcase from "../../components/FragranceShowcase/FragranceShowcase";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import { fragrances } from "../../data/products";
import styles from "./Products.module.css";

const PAGE_SIZE = 6;

function Products() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [collection, setCollection] = useState("");
  const [sort, setSort] = useState("catalog");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const availableFragrances = useMemo(
    () => fragrances.filter((fragrance) => fragrance.available !== false),
    []
  );

  const collections = useMemo(
    () =>
      [...new Set(availableFragrances.map((item) => item.collection).filter(Boolean))].sort(),
    [availableFragrances]
  );

  const hasNewReleases = availableFragrances.some((item) => item.isNew);

  const filteredFragrances = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("pt-BR");
    const matches = availableFragrances.filter((fragrance) => {
      const searchable = [
        fragrance.name,
        fragrance.shortDescription,
        fragrance.collection
      ]
        .join(" ")
        .toLocaleLowerCase("pt-BR");

      return (
        (!term || searchable.includes(term)) &&
        (filter === "all" ||
          (filter === "featured" && fragrance.featured) ||
          (filter === "new" && fragrance.isNew)) &&
        (!collection || fragrance.collection === collection)
      );
    });

    if (sort === "name") {
      return [...matches].sort((a, b) =>
        a.name.localeCompare(b.name, "pt-BR", { numeric: true })
      );
    }

    if (sort === "recent") {
      return [...matches].sort((a, b) =>
        (b.launchDate || "").localeCompare(a.launchDate || "")
      );
    }

    return matches;
  }, [availableFragrances, collection, filter, search, sort]);

  const visibleFragrances = filteredFragrances.slice(0, visibleCount);
  const hasMore = visibleCount < filteredFragrances.length;

  const resetPage = () => setVisibleCount(PAGE_SIZE);

  return (
    <>
      <SEO
        title="Perfumes"
        description="Conheça o portfólio de perfumes para cães e gatos, veja as apresentações disponíveis e encontre sua fragrância."
        path="/produtos"
      />
      <PageHero
        eyebrow="Catálogo"
        title="Perfumes Vanity Pet."
        text="Busque por nome, filtre os destaques e consulte as apresentações de cada fragrância."
        compact
      />

      <section className={`section ${styles.catalog}`}>
        <Container>
          <div className={styles.catalogIntro}>
            <div>
              <h2>Todos os perfumes.</h2>
            </div>
            <p>
              Use a busca e os filtros para encontrar uma fragrância e ver os
              volumes disponíveis.
            </p>
          </div>

          <div className={styles.toolbar}>
            <div className={styles.search}>
              <label className="sr-only" htmlFor="catalog-search">
                Buscar perfumes
              </label>
              <Search aria-hidden="true" size={18} strokeWidth={1.5} />
              <input
                id="catalog-search"
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  resetPage();
                }}
                placeholder="Buscar por nome"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    resetPage();
                  }}
                  aria-label="Limpar busca"
                >
                  <X aria-hidden="true" size={16} />
                </button>
              )}
            </div>

            <div className={styles.filterGroup} role="group" aria-label="Filtrar catálogo">
              <button
                type="button"
                className={filter === "all" ? styles.active : ""}
                onClick={() => {
                  setFilter("all");
                  resetPage();
                }}
                aria-pressed={filter === "all"}
              >
                Todos
              </button>
              <button
                type="button"
                className={filter === "featured" ? styles.active : ""}
                onClick={() => {
                  setFilter("featured");
                  resetPage();
                }}
                aria-pressed={filter === "featured"}
              >
                Destaques
              </button>
              {hasNewReleases && (
                <button
                  type="button"
                  className={filter === "new" ? styles.active : ""}
                  onClick={() => {
                    setFilter("new");
                    resetPage();
                  }}
                  aria-pressed={filter === "new"}
                >
                  Lançamentos
                </button>
              )}
            </div>

            {collections.length > 0 && (
              <label className={styles.selectField}>
                <span>Coleção</span>
                <select
                  value={collection}
                  onChange={(event) => {
                    setCollection(event.target.value);
                    resetPage();
                  }}
                >
                  <option value="">Todas</option>
                  {collections.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className={styles.selectField}>
              <span>Ordenar</span>
              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  resetPage();
                }}
              >
                <option value="catalog">Ordem do catálogo</option>
                <option value="name">Nome</option>
                {hasNewReleases && <option value="recent">Mais recentes</option>}
              </select>
            </label>
          </div>

          <div className={styles.resultHeader}>
            <p aria-live="polite">
              Exibindo <strong>{visibleFragrances.length}</strong> de{" "}
              <strong>{filteredFragrances.length}</strong> perfumes
            </p>
            <span>Catálogo institucional — consulte onde comprar</span>
          </div>

          <div className={styles.list}>
            {visibleFragrances.length > 0 ? (
              visibleFragrances.map((fragrance) => (
                <Reveal key={fragrance.id}>
                  <FragranceShowcase product={fragrance} />
                </Reveal>
              ))
            ) : (
              <div className="no-results">
                <h2>Nenhum perfume encontrado.</h2>
                <p>Ajuste a busca ou retorne ao catálogo completo.</p>
                <SecondaryButton
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setFilter("all");
                    setCollection("");
                    resetPage();
                  }}
                >
                  Mostrar todos
                </SecondaryButton>
              </div>
            )}
          </div>

          {hasMore && (
            <div className={styles.loadMore}>
              <SecondaryButton
                type="button"
                onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
              >
                Carregar mais
              </SecondaryButton>
              <span>
                {filteredFragrances.length - visibleCount} perfumes restantes
              </span>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

export default Products;
