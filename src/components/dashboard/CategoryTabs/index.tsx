import React, { useState } from "react";
import {
  Leaf,
  Zap,
  Truck,
  Trash2,
  Wheat,
  Factory,
  Palmtree,
} from "lucide-react";
import type { ProjectCategory, ChartData } from "../../../types";
import styles from "./CategoryTabs.module.css";
import ProjectsBarChart from "../ProjectsBarChart";

interface CategoryTabsProps {
  categories: ProjectCategory[];
  chartData: ChartData[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  chartData,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("1");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "zap":
        return <Leaf size={20} />;
      case "truck":
        return <Truck size={20} />;
      case "trash-2":
        return <Trash2 size={20} />;
      case "tree":
        return <Palmtree size={20} />;
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
      <ProjectsBarChart data={chartData} />
    </div>
  );
};

export default CategoryTabs;
