import React from "react";
import styles from "./ProjectLocationMap.module.css";

const ProjectLocationMap: React.FC = () => {
  return (
    <div className={styles.mapContainer}>
      <svg viewBox="0 0 600 400" className={styles.mapSVG}>
        <rect x="0" y="0" width="600" height="400" fill="#f0f0f0" />
        <path
          d="M50 50 L550 50 L550 350 L50 350 Z"
          fill="#e8e8e8"
          stroke="#ccc"
          strokeWidth="2"
        />

        <circle
          cx="300"
          cy="200"
          r="80"
          fill="#a0d9ff"
          stroke="#6cb6ff"
          strokeWidth="2"
        />
        <text
          x="300"
          y="205"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#333"
        >
          Nairobi
        </text>

        <line
          x1="300"
          y1="200"
          x2="150"
          y2="100"
          stroke="#888"
          strokeWidth="2"
        />
        <line
          x1="300"
          y1="200"
          x2="450"
          y2="100"
          stroke="#888"
          strokeWidth="2"
        />
        <line
          x1="300"
          y1="200"
          x2="300"
          y2="350"
          stroke="#888"
          strokeWidth="2"
        />
        <line
          x1="300"
          y1="200"
          x2="100"
          y2="250"
          stroke="#888"
          strokeWidth="2"
        />
        <line
          x1="300"
          y1="200"
          x2="500"
          y2="250"
          stroke="#888"
          strokeWidth="2"
        />

        <text x="150" y="90" textAnchor="middle" fontSize="14" fill="#333">
          Nyathuna
        </text>
        <text x="200" y="150" textAnchor="middle" fontSize="14" fill="#333">
          Wangige
        </text>
        <text x="180" y="250" textAnchor="middle" fontSize="14" fill="#333">
          Rungiri
        </text>
        <text x="300" y="365" textAnchor="middle" fontSize="14" fill="#333">
          Ngong
        </text>
        <text x="400" y="100" textAnchor="middle" fontSize="14" fill="#333">
          Ruaka
        </text>
        <text x="450" y="150" textAnchor="middle" fontSize="14" fill="#333">
          Githurai
        </text>
        <text x="500" y="250" textAnchor="middle" fontSize="14" fill="#333">
          Kamelu
        </text>
        <text x="480" y="200" textAnchor="middle" fontSize="14" fill="#333">
          Iven Njiru
        </text>
        <text x="480" y="215" textAnchor="middle" fontSize="12" fill="#333">
          Town
        </text>
      </svg>
    </div>
  );
};

export default React.memo(ProjectLocationMap);
