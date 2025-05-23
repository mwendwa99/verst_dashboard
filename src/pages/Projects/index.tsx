import React from "react";
import styles from "./Projects.module.css";
import { Outlet } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.pageSubtitle}>Project Name</p>
      <h1 className={styles.pageTitle}>Kilifi Solar Project</h1>

      <Outlet />
    </div>
  );
};

export default Projects;
