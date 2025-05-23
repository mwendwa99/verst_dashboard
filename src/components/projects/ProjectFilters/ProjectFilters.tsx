import React from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ProjectFilters.module.css";

interface ProjectFiltersProps {
  title: string;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ title }) => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersLeft}>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.filtersRight}>
        <button className={styles.filterButton}>
          Project Status
          <ChevronDown size={22} className={styles.chevronIcon} />
        </button>
        <button className={styles.filterButton}>
          Project Type
          <ChevronDown size={22} className={styles.chevronIcon} />
        </button>
      </div>
    </div>
  );
};

export default ProjectFilters;
