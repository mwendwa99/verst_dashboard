import React from "react";
import { Plus } from "lucide-react";
import styles from "./Projects.module.css";

const AddProject: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Add Project</h1>

      <div className={styles.placeholder}>
        <Plus size={48} color="#4b5563" style={{ margin: "0 auto 1rem" }} />
        <h2 className={styles.placeholderTitle}>Add Project Page</h2>
      </div>
    </div>
  );
};

export default AddProject;
