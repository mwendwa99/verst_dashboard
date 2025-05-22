import React, { useMemo } from "react";
import geojson from "./geojson.json";
import { geoMercator, geoPath } from "d3-geo";
import styles from "./d3.module.css";

const Map = () => {
  const width = 500;
  const height = width * 0.9;

  const projection = useMemo(() => {
    return geoMercator().fitExtent(
      [
        [0, 0],
        [width * 0.9, height * 0.9],
      ],
      geojson
    );
  }, [geojson, width, height]);

  const path = useMemo(() => geoPath().projection(projection), [projection]);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Active Projects</h3>
      <span>
        <svg width={width} height={height}>
          <g className="geojson-layer">
            {geojson.features.map((d, index) => (
              <path
                key={d.properties.Name || d.id || index}
                d={path(d)}
                fill={d.properties.fillColor || "#eee"}
                stroke="#0e1724"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            ))}
          </g>
        </svg>
      </span>
    </div>
  );
};

export default React.memo(Map);
