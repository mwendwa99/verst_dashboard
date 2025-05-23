import React from 'react';
import { Briefcase, Leaf, DollarSign } from 'lucide-react';
import styles from './ProjectStats.module.css';

interface ProjectStatsProps {
  totalProjects: number;
  creditsIssued: number;
  expectedCredits: number;
  totalProjected: number;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({
  totalProjects,
  creditsIssued,
  expectedCredits,
  totalProjected
}) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <div className={`${styles.statIcon} ${styles.purple}`}>
          <Briefcase size={24} />
        </div>
        <div className={styles.statValue}>{totalProjects}</div>
        <div className={styles.statLabel}>No. of projects</div>
      </div>
      
      <div className={styles.statCard}>
        <div className={`${styles.statIcon} ${styles.green}`}>
          <Leaf size={24} />
        </div>
        <div className={styles.statValue}>{creditsIssued.toLocaleString()}</div>
        <div className={styles.statLabel}>No. of Credits issued</div>
      </div>
      
      <div className={styles.statCard}>
        <div className={`${styles.statIcon} ${styles.orange}`}>
          <DollarSign size={24} />
        </div>
        <div className={styles.statValue}>${expectedCredits.toLocaleString()}</div>
        <div className={styles.statLabel}>Expected Credits per annum</div>
      </div>
      
      <div className={styles.statCard}>
        <div className={`${styles.statIcon} ${styles.orange}`}>
          <DollarSign size={24} />
        </div>
        <div className={styles.statValue}>${totalProjected.toLocaleString()}</div>
        <div className={styles.statLabel}>Total Projected</div>
      </div>
    </div>
  );
};

export default ProjectStats;