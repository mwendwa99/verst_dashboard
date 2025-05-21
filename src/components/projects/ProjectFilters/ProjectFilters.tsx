import React from 'react';
import { Filter, ArrowDownUp } from 'lucide-react';
import styles from './ProjectFilters.module.css';

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
          <Filter size={16} />
          Project Status
        </button>
        <button className={styles.filterButton}>
          <Filter size={16} />
          Project Type
        </button>
      </div>
    </div>
  );
};

export default ProjectFilters;