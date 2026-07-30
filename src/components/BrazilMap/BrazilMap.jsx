import { memo, useMemo } from "react";
import brazilMap from "../../assets/maps/brazil-states-map.json";
import styles from "./BrazilMap.module.css";

const compactStates = new Set(["DF", "ES", "RJ", "SE"]);

function BrazilMap({
  counts,
  selectedState,
  highlightedState,
  onToggleState
}) {
  const states = useMemo(
    () =>
      [...brazilMap.states].sort((first, second) => {
        const availabilityOrder =
          Number(Boolean(counts[first.uf])) - Number(Boolean(counts[second.uf]));

        if (availabilityOrder) return availabilityOrder;

        return (
          Number(compactStates.has(first.uf)) -
          Number(compactStates.has(second.uf))
        );
      }),
    [counts]
  );

  const handleKeyDown = (event, state) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    onToggleState(state);
  };

  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <svg
          className={styles.map}
          viewBox={brazilMap.viewBox}
          role="group"
          aria-labelledby="vanity-map-title vanity-map-description"
          preserveAspectRatio="xMidYMid meet"
        >
          <title id="vanity-map-title">
            Mapa interativo dos distribuidores Vanity Pet no Brasil
          </title>
          <desc id="vanity-map-description">
            Os estados dourados possuem distribuidores. Selecione um estado
            para filtrar a lista.
          </desc>

          {states.map((state) => {
            const count = counts[state.uf] || 0;
            const isAvailable = count > 0;
            const isSelected = selectedState === state.uf;
            const isHighlighted =
              highlightedState === state.uf && !isSelected;
            const className = [
              styles.state,
              isAvailable ? styles.available : styles.unavailable,
              isSelected ? styles.selected : "",
              isHighlighted ? styles.highlighted : ""
            ]
              .filter(Boolean)
              .join(" ");

            if (!isAvailable) {
              return (
                <g
                  key={state.uf}
                  className={className}
                  role="img"
                  aria-label={`${state.name}, sem distribuidor cadastrado`}
                  aria-disabled="true"
                >
                  <path className={styles.shape} d={state.d} />
                </g>
              );
            }

            return (
              <g
                key={state.uf}
                className={className}
                role="button"
                tabIndex="0"
                aria-pressed={isSelected}
                aria-label={`${state.name}, estado com distribuidores. ${
                  isSelected ? "Remover filtro" : "Filtrar por este estado"
                }.`}
                onClick={() => onToggleState(state.uf)}
                onKeyDown={(event) => handleKeyDown(event, state.uf)}
              >
                <path className={styles.shape} d={state.d} />
                {compactStates.has(state.uf) && (
                  <circle
                    className={styles.hitArea}
                    cx={state.focusPoint[0]}
                    cy={state.focusPoint[1]}
                    r="12"
                    aria-hidden="true"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption className={styles.caption}>
        <p>Selecione um estado dourado para filtrar a rede.</p>
        <ul className={styles.legend} aria-label="Legenda do mapa">
          <li>
            <span className={styles.legendAvailable} aria-hidden="true" />
            Com distribuidores
          </li>
          <li>
            <span className={styles.legendUnavailable} aria-hidden="true" />
            Sem distribuidores
          </li>
          <li>
            <span className={styles.legendSelected} aria-hidden="true" />
            Selecionado
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}

export default memo(BrazilMap);
