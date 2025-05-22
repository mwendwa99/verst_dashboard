import React from "react";
import { Calendar, MapPin, User, DollarSign, CheckCircle } from "lucide-react";
import styles from "./ProjectDetails.module.css";

const ProjectDetails: React.FC = () => {
  return (
    <div className={styles.detailsGrid}>
      <div className={styles.detailItem}>
        <Calendar size={20} color="#5831e8" />
        <div className={styles.detailText}>
          <span className={styles.detailLabel}>Project Start Date:</span>
          <span className={styles.detailValue}>2023-01-15</span>
        </div>
      </div>
      <div className={styles.detailItem}>
        <Calendar size={20} color="#5831e8" />
        <div className={styles.detailText}>
          <span className={styles.detailLabel}>Project End Date:</span>
          <span className={styles.detailValue}>2025-01-15</span>
        </div>
      </div>
      <div className={styles.detailItem}>
        <MapPin size={20} color="#5831e8" />
        <div className={styles.detailText}>
          <span className={styles.detailLabel}>Project Location:</span>
          <span className={styles.detailValue}>Kilifi County</span>
        </div>
      </div>
      <div className={styles.detailItem}>
        <User size={20} color="#5831e8" />
        <div className={styles.detailText}>
          <span className={styles.detailLabel}>Project Proponent:</span>
          <span className={styles.detailValue}>Kilifi Energy Ltd.</span>
        </div>
      </div>
      <div className={styles.detailItem}>
        <DollarSign size={20} color="#5831e8" />
        <div className={styles.detailText}>
          <span className={styles.detailLabel}>Total Budget:</span>
          <span className={styles.detailValue}>$15,000</span>
        </div>
      </div>
      <div className={styles.detailItem}>
        <CheckCircle size={20} color="#5831e8" />
        <div className={styles.detailText}>
          <span className={styles.detailLabel}>Status:</span>
          <span className={styles.detailValue}>In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectDetails);
