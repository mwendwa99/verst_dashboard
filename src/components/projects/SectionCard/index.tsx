import React from "react";
import styles from "./SectionCard.module.css";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  headerActions?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  children,
  fullWidth,
  headerActions,
}) => {
  return (
    <section className={`${styles.card} ${fullWidth ? styles.fullWidth : ""}`}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{title}</h2>
        {headerActions && (
          <div className={styles.headerActions}>{headerActions}</div>
        )}
      </div>
      <div className={styles.cardContent}>{children}</div>
    </section>
  );
};

export default React.memo(SectionCard);
