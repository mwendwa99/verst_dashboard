import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import type { RegionData } from "../../../types";
import styles from "./KenyaMap.module.css";

// Kenya GeoJSON simplified for demonstration
const KENYA_TOPO_JSON = {
  type: "Topology",
  objects: {
    counties: {
      type: "GeometryCollection",
      geometries: [
        // Simplified Kenya counties for demonstration
        {
          type: "Polygon",
          arcs: [[0]],
          properties: { name: "Mombasa", id: "KE-01" },
        },
        {
          type: "Polygon",
          arcs: [[1]],
          properties: { name: "Kwale", id: "KE-02" },
        },
        {
          type: "Polygon",
          arcs: [[2]],
          properties: { name: "Kilifi", id: "KE-03" },
        },
        {
          type: "Polygon",
          arcs: [[3]],
          properties: { name: "Tana River", id: "KE-04" },
        },
        {
          type: "Polygon",
          arcs: [[4]],
          properties: { name: "Lamu", id: "KE-05" },
        },
        {
          type: "Polygon",
          arcs: [[5]],
          properties: { name: "Taita-Taveta", id: "KE-06" },
        },
        {
          type: "Polygon",
          arcs: [[6]],
          properties: { name: "Garissa", id: "KE-07" },
        },
        {
          type: "Polygon",
          arcs: [[7]],
          properties: { name: "Wajir", id: "KE-08" },
        },
        {
          type: "Polygon",
          arcs: [[8]],
          properties: { name: "Mandera", id: "KE-09" },
        },
        {
          type: "Polygon",
          arcs: [[9]],
          properties: { name: "Marsabit", id: "KE-10" },
        },
        {
          type: "Polygon",
          arcs: [[10]],
          properties: { name: "Isiolo", id: "KE-11" },
        },
        {
          type: "Polygon",
          arcs: [[11]],
          properties: { name: "Meru", id: "KE-12" },
        },
        {
          type: "Polygon",
          arcs: [[12]],
          properties: { name: "Tharaka-Nithi", id: "KE-13" },
        },
        {
          type: "Polygon",
          arcs: [[13]],
          properties: { name: "Embu", id: "KE-14" },
        },
        {
          type: "Polygon",
          arcs: [[14]],
          properties: { name: "Kitui", id: "KE-15" },
        },
        {
          type: "Polygon",
          arcs: [[15]],
          properties: { name: "Machakos", id: "KE-16" },
        },
        {
          type: "Polygon",
          arcs: [[16]],
          properties: { name: "Makueni", id: "KE-17" },
        },
      ],
    },
  },
  arcs: [
    [
      [39.6, -4.05],
      [39.7, -4.1],
      [39.65, -4.15],
      [39.55, -4.1],
      [39.6, -4.05],
    ],
    [
      [39.4, -4.3],
      [39.5, -4.4],
      [39.4, -4.5],
      [39.3, -4.4],
      [39.4, -4.3],
    ],
    [
      [39.8, -3.9],
      [39.9, -4.0],
      [39.8, -4.1],
      [39.7, -4.0],
      [39.8, -3.9],
    ],
    [
      [40.0, -2.5],
      [40.1, -2.6],
      [40.0, -2.7],
      [39.9, -2.6],
      [40.0, -2.5],
    ],
    [
      [40.9, -2.3],
      [41.0, -2.4],
      [40.9, -2.5],
      [40.8, -2.4],
      [40.9, -2.3],
    ],
    [
      [38.5, -3.5],
      [38.6, -3.6],
      [38.5, -3.7],
      [38.4, -3.6],
      [38.5, -3.5],
    ],
    [
      [40.5, -1.0],
      [40.6, -1.1],
      [40.5, -1.2],
      [40.4, -1.1],
      [40.5, -1.0],
    ],
    [
      [40.0, 1.5],
      [40.1, 1.4],
      [40.0, 1.3],
      [39.9, 1.4],
      [40.0, 1.5],
    ],
    [
      [41.5, 3.5],
      [41.6, 3.4],
      [41.5, 3.3],
      [41.4, 3.4],
      [41.5, 3.5],
    ],
    [
      [38.0, 2.0],
      [38.1, 1.9],
      [38.0, 1.8],
      [37.9, 1.9],
      [38.0, 2.0],
    ],
    [
      [38.5, 1.0],
      [38.6, 0.9],
      [38.5, 0.8],
      [38.4, 0.9],
      [38.5, 1.0],
    ],
    [
      [37.9, 0.3],
      [38.0, 0.2],
      [37.9, 0.1],
      [37.8, 0.2],
      [37.9, 0.3],
    ],
    [
      [37.6, -0.2],
      [37.7, -0.3],
      [37.6, -0.4],
      [37.5, -0.3],
      [37.6, -0.2],
    ],
    [
      [37.4, -0.5],
      [37.5, -0.6],
      [37.4, -0.7],
      [37.3, -0.6],
      [37.4, -0.5],
    ],
    [
      [38.5, -1.5],
      [38.6, -1.6],
      [38.5, -1.7],
      [38.4, -1.6],
      [38.5, -1.5],
    ],
    [
      [37.5, -1.5],
      [37.6, -1.6],
      [37.5, -1.7],
      [37.4, -1.6],
      [37.5, -1.5],
    ],
    [
      [37.8, -2.0],
      [37.9, -2.1],
      [37.8, -2.2],
      [37.7, -2.1],
      [37.8, -2.0],
    ],
  ],
};

interface KenyaMapProps {
  regions: RegionData[];
}

const KenyaMap: React.FC<KenyaMapProps> = ({ regions }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Check if a region has active projects
  const hasActiveProjects = (geoId: string) => {
    const region = regions.find((r) => r.id === geoId);
    return region?.hasProjects || false;
  };

  const handleMouseEnter = (geo: any, evt: any) => {
    const { pageX, pageY } = evt;
    setTooltipContent(geo.properties.name);
    setTooltipPosition({ x: pageX, y: pageY });
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleMouseMove = (evt: any) => {
    const { pageX, pageY } = evt;
    setTooltipPosition({ x: pageX, y: pageY - 40 });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Active Projects</h3>
      <div className={styles.mapWrapper}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 2500,
            center: [38, -1],
          }}
          width={400}
          height={300}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={KENYA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isActive = hasActiveProjects(geo.properties.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={`${styles.county} ${
                      isActive ? styles.active : ""
                    }`}
                    onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        <div
          className={`${styles.tooltip} ${
            tooltipVisible ? styles.visible : ""
          }`}
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          {tooltipContent}
        </div>
      </div>
    </div>
  );
};

export default KenyaMap;
