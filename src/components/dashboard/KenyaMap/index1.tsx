// component: KenyaMapSVG.tsx
import React, { useState, useEffect, useRef } from "react";
import * as topojsonClient from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";
import styles from "./KenyaMap.module.css";

// URL to your detailed Kenya TopoJSON file.
// Ensure your topojson file is placed in the `public` directory
const KENYA_GEO_URL = "/kenya-counties.topo.json"; // Assuming this path is correct for your public folder

// Names of counties in the former Coast Province.
// Ensure these names EXACTLY match those in your TopoJSON file's properties.
const COAST_PROVINCE_COUNTIES = [
  "Mombasa",
  "Kwale",
  "Kilifi",
  "Tana River",
  "Lamu",
  "Taita-Taveta",
];

interface KenyaMapSVGProps {
  // Although `regions` prop is defined in the original code,
  // it's not used in this refactored SVG rendering example for simplicity,
  // as the highlighting is based on hardcoded county names.
  // If you need to dynamically highlight based on `regions` data,
  // you would adjust the `isCoastal` logic or introduce new highlight logic here.
  regions?: any[]; // Keeping it for type consistency if it's used elsewhere
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
        // Check if the topoData contains the 'counties' object
        // The specific object name might vary based on your TopoJSON file.
        // Common names are 'counties', 'kenya', 'regions', etc.
        // You might need to inspect your topo.json file to find the correct object name.
        if (topoData.objects && topoData.objects.counties) {
          const geojson = topojsonClient.feature(
            topoData,
            topoData.objects.counties
          );
          setGeoJsonData(geojson);
        } else {
          // Fallback if 'counties' is not found, try other common object names
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

  // Define SVG dimensions
  const width = 600;
  const height = 600;

  // Create a projection that fits the GeoJSON data within the SVG dimensions
  // geoMercator is a good general-purpose projection.
  const projection = geoMercator().fitSize([width, height], geoJsonData);

  // Create a path generator that converts GeoJSON geometries to SVG path strings
  const pathGenerator = geoPath().projection(projection);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Active Projects</h3>
      <div className={styles.svgWrapper}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className={styles.mapSVG}
          preserveAspectRatio="xMidYMid meet" // Ensures the map scales properly
        >
          {geoJsonData.features.map((feature: any, index: number) => {
            // Attempt to get the county name from various common property names
            const countyName =
              feature.properties.name ||
              feature.properties.NAME_1 ||
              feature.properties.COUNTY_NAM ||
              feature.properties.county_name ||
              "Unknown County"; // Fallback for safety

            const isCoastal = COAST_PROVINCE_COUNTIES.includes(countyName);

            // Generate the SVG path string for the current feature
            const pathData = pathGenerator(feature);

            // Apply styling based on whether it's a coastal county
            const fillColor = isCoastal ? "#28A745" : "transparent"; // Green for coastal, transparent for others
            const strokeColor = "black"; // Black border for all
            const strokeWidth = 0.5; // Adjusted for a finer border

            return (
              <path
                key={feature.id || index} // Use feature.id if available, otherwise index
                d={pathData || ""} // The SVG path data
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                className={styles.countyPath}
                // Add a title for basic tooltip on hover
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
