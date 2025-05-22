import React from "react";
import styles from "./SectionCard.module.css";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean; // Optional prop for full width cards
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  children,
  fullWidth,
}) => {
  return (
    <section className={`${styles.card} ${fullWidth ? styles.fullWidth : ""}`}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent}>{children}</div>
    </section>
  );
};

export default React.memo(SectionCard);
