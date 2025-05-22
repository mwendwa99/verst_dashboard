import React from "react";
import styles from "./Projects.module.css";
import { Outlet } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Project Lists</h1>

      <Outlet />
    </div>
  );
};

export default Projects;
