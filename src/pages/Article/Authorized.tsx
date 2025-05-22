import React from "react";
import { FileText } from "lucide-react";
import styles from "./Article.module.css";

const Authorized: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Authorized</h1>

      <div className={styles.placeholder}>
        <FileText size={48} color="#4b5563" style={{ margin: "0 auto 1rem" }} />
        <h2 className={styles.placeholderTitle}>Authorized Page</h2>
      </div>
    </div>
  );
};

export default Authorized;
