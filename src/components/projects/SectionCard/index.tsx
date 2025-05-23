import React from "react";
import styles from "./SectionCard.module.css";

interface SectionCardProps {
  title: string;
  divider?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  headerActions?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  children,
  fullWidth,
  headerActions,
  divider,
}) => {
  return (
    <section className={`${styles.card} ${fullWidth ? styles.fullWidth : ""}`}>
      <div
        className={styles.cardHeader}
        style={{
          borderBottom: !divider ? "none" : "1px solid var(--color-gray-200)",
        }}
      >
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
