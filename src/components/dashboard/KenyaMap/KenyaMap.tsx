import React, { useState, useEffect, useRef } from "react";
import * as topojsonClient from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";
import styles from "./KenyaMap.module.css";

const KENYA_GEO_URL = "/kenya-counties.topo.json";

const COAST_PROVINCE_COUNTIES = [
  "Mombasa",
  "Kwale",
  "Kilifi",
  "Tana River",
  "Lamu",
  "Taita-Taveta",
];

interface KenyaMapSVGProps {
  regions?: any[];
}

const KenyaMapSVG: React.FC<KenyaMapSVGProps> = ({ regions }) => {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    fetch(KENYA_GEO_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `HTTP error! status: ${res.status} for ${KENYA_GEO_URL}`
          );
        }
        return res.json();
      })
      .then((topoData) => {
        if (topoData.objects && topoData.objects.counties) {
          const geojson = topojsonClient.feature(
            topoData,
            topoData.objects.counties
          );
          setGeoJsonData(geojson);
        } else {
          const objectKeys = Object.keys(topoData.objects);
          if (objectKeys.length > 0) {
            console.warn(
              "Default 'counties' object not found. Trying first available object:",
              objectKeys[0]
            );
            const geojson = topojsonClient.feature(
              topoData,
              topoData.objects[objectKeys[0]]
            );
            setGeoJsonData(geojson);
          } else {
            throw new Error(
              "TopoJSON format incorrect: No objects found for conversion."
            );
          }
        }
      })
      .catch((error) => {
        console.error("Failed to fetch or process map data:", error);
      });
  }, []);

  if (!geoJsonData) {
    return <p className={styles.loadingText}>Loading map data...</p>;
  }

  const width = 600;
  const height = 600;

  const projection = geoMercator().fitSize([width, height], geoJsonData);

  const pathGenerator = geoPath().projection(projection);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Active Projects</h3>
      <div className={styles.svgWrapper}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className={styles.mapSVG}
          preserveAspectRatio="xMidYMid meet"
        >
          {geoJsonData.features.map((feature: any, index: number) => {
            const countyName =
              feature.properties.name ||
              feature.properties.NAME_1 ||
              feature.properties.COUNTY_NAM ||
              feature.properties.county_name ||
              "Unknown County";

            const isCoastal = COAST_PROVINCE_COUNTIES.includes(countyName);

            const pathData = pathGenerator(feature);

            const fillColor = isCoastal ? "#28A745" : "transparent";
            const strokeColor = "black";
            const strokeWidth = 0.5;

            return (
              <path
                key={feature.id || index}
                d={pathData || ""}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                className={styles.countyPath}
                title={countyName}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default KenyaMapSVG;
