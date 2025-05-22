import React from "react";
import { FileText } from "lucide-react";
import styles from "./Article.module.css";
import { Outlet } from "react-router-dom";

const Article: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Article-6</h1>

      <div className={styles.placeholder}>
        <FileText size={48} color="#4b5563" style={{ margin: "0 auto 1rem" }} />
        <h2 className={styles.placeholderTitle}>Article-6 Page</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default Article;
