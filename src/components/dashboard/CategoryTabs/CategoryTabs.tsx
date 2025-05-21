import React, { useState } from "react";
import { Zap, Truck, Trash2, Wheat, Factory } from "lucide-react";
import type { ProjectCategory } from "../../../types";
import styles from "./CategoryTabs.module.css";

interface CategoryTabsProps {
  categories: ProjectCategory[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>("1");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "zap":
        return <Zap size={20} />;
      case "truck":
        return <Truck size={20} />;
      case "trash-2":
        return <Trash2 size={20} />;
      // case "tree":
      //   return <Tree size={20} />;
      case "wheat":
        return <Wheat size={20} />;
      case "factory":
        return <Factory size={20} />;
      default:
        return <Zap size={20} />;
    }
  };

  return (
    <div className={styles.tabs}>
      <h3 className={styles.tabsHeader}>Projects Overview</h3>
      <div className={styles.tabsList}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${styles.tab} ${
              activeCategory === category.id ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className={styles.tabIcon}>
              {getCategoryIcon(category.icon)}
            </div>
            <div className={styles.tabName}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
