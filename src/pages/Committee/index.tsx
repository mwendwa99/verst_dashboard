import React from "react";
import { CreditCard } from "lucide-react";
import styles from "./Committee.module.css";

const Committee: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Committee</h1>

      <div className={styles.placeholder}>
        <CreditCard
          size={48}
          color="#4b5563"
          style={{ margin: "0 auto 1rem" }}
        />
        <h2 className={styles.placeholderTitle}>Committee Page</h2>
      </div>
    </div>
  );
};

export default Committee;
