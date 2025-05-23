import React from "react";
import { Briefcase, Leaf, DollarSign } from "lucide-react";
import styles from "./ProjectStats.module.css";

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
  totalProjected,
}) => {
  return (
    <div className={styles.statsContainer}>
      <div className={`${styles.statCard} ${styles.purpleCard}`}>
        <div className={styles.iconContainer}>
          <Briefcase
            size={24}
            className={styles.icon}
            style={{
              color: "#a729d2",
            }}
          />
        </div>
        <div className={styles.statContent}>
          <div className={styles.statValue}>{totalProjects}</div>
          <div className={styles.statLabel}>No. of projects</div>
        </div>
      </div>

      <div className={`${styles.statCard} ${styles.greenCard}`}>
        <div className={styles.iconContainer}>
          <Leaf size={24} className={styles.icon} />
        </div>
        <div className={styles.statContent}>
          <div className={styles.statValue}>
            {creditsIssued.toLocaleString()}
          </div>
          <div className={styles.statLabel}>No. of Credits issued</div>
        </div>
      </div>

      <div className={`${styles.statCard} ${styles.orangeCard}`}>
        <div className={styles.iconContainer}>
          <DollarSign
            size={24}
            className={styles.icon}
            style={{
              color: "#fab03e",
            }}
          />
        </div>
        <div className={styles.statContent}>
          <div className={styles.statValue}>
            ${expectedCredits.toLocaleString()}
          </div>
          <div className={styles.statLabel}>Expected Credits per annum</div>
        </div>
      </div>

      <div className={`${styles.statCard} ${styles.orangeCard}`}>
        <div className={styles.iconContainer}>
          <DollarSign
            size={24}
            className={styles.icon}
            style={{
              color: "#fab03e",
            }}
          />
        </div>
        <div className={styles.statContent}>
          <div className={styles.statValue}>
            ${totalProjected.toLocaleString()}
          </div>
          <div className={styles.statLabel}>Total Projected</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
