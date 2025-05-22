import React from "react";
import { BarChart2 } from "lucide-react";
import styles from "./Analytics.module.css";

const Article: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Analytics</h1>

      <div className={styles.placeholder}>
        <BarChart2
          size={48}
          color="#4b5563"
          style={{ margin: "0 auto 1rem" }}
        />
        <h2 className={styles.placeholderTitle}>Analytics Page</h2>
      </div>
    </div>
  );
};

export default Article;
