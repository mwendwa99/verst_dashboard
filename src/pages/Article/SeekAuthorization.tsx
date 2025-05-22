import React from "react";
import { Check } from "lucide-react";
import styles from "./Article.module.css";

const SeekAuthorization: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Seek Authorization</h1>

      <div className={styles.placeholder}>
        <Check size={48} color="#4b5563" style={{ margin: "0 auto 1rem" }} />
        <h2 className={styles.placeholderTitle}>Seek Authorization Page</h2>
      </div>
    </div>
  );
};

export default SeekAuthorization;
