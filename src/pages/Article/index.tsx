import React from "react";
import styles from "./Article.module.css";
import { Outlet } from "react-router-dom";

const Article: React.FC = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default Article;
