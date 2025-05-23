import React from "react";
import {
  Pencil,
  MapPin,
  TreePine,
  Briefcase,
  Calendar,
  ListChecks,
} from "lucide-react";
import styles from "./ProjectDetails.module.css";

const ProjectDetails: React.FC = () => {
  return (
    <div className={styles.detailsTable}>
      <div className={styles.detailsCol}>
        <div className={styles.detailRow}>
          <div className={styles.iconBox}>
            <Pencil size={28} color="#22823b" />
          </div>
          <div>
            <span className={styles.detailLabel}>Project Name:</span>
            <span className={styles.detailValue}>Rachel Frye</span>
          </div>
        </div>
        <div className={styles.detailRow}>
          <div className={styles.iconBox}>
            <MapPin size={28} color="#22823b" />
          </div>
          <div>
            <span className={styles.detailLabel}>Project Location:</span>
            <span className={styles.detailValue}>Nairobi</span>
          </div>
        </div>
        <div className={styles.detailRow}>
          <div className={styles.iconBox}>
            <TreePine size={28} color="#22823b" />
          </div>
          <div>
            <span className={styles.detailLabel}>Project Type:</span>
            <span className={styles.detailValue}>Agriculture</span>
          </div>
        </div>
      </div>
      <div className={styles.detailsCol}>
        <div className={styles.detailRow}>
          <div className={styles.iconBox}>
            <Briefcase size={28} color="#22823b" />
          </div>
          <div>
            <span className={styles.detailLabel}>Project Sector:</span>
            <span className={styles.detailValue}>Livestock Management</span>
          </div>
        </div>
        <div className={styles.detailRow}>
          <div className={styles.iconBox}>
            <Calendar size={28} color="#22823b" />
          </div>
          <div>
            <span className={styles.detailLabel}>Project Start Date:</span>
            <span className={styles.detailValue}>5/17/2024</span>
          </div>
        </div>
        <div className={styles.detailRow}>
          <div className={styles.iconBox}>
            <ListChecks size={28} color="#22823b" />
          </div>
          <div>
            <span className={styles.detailLabel}>Project Milestone:</span>
            <span className={styles.detailValue}>Stakeholder Engagement</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectDetails);
