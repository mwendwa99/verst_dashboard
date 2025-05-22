import React from "react";
import { Settings } from "lucide-react";
import styles from "./Settings.module.css";

const Article: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Settings</h1>

      <div className={styles.placeholder}>
        <Settings size={48} color="#4b5563" style={{ margin: "0 auto 1rem" }} />
        <h2 className={styles.placeholderTitle}>Settings Page</h2>
      </div>
    </div>
  );
};

export default Article;
