import React, { useState, useEffect, useRef } from "react";
import {
  Leaf,
  Zap,
  Truck,
  Trash2,
  Wheat,
  Factory,
  Palmtree,
  ChevronDown,
} from "lucide-react";
import type { ProjectCategory, ChartData } from "../../../types";
import styles from "./CategoryTabs.module.css";
import ProjectsBarChart from "../ProjectsBarChart";

interface CategoryTabsProps {
  categories: ProjectCategory[];
  chartData: ChartData[];
}

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

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  chartData,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("1");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("THIS WEEK");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.tabs}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <h3 className={styles.tabsHeader}>Projects Overview</h3>

        <div className={styles.dropdownContainer} ref={dropdownRef}>
          <button
            className={styles.filterButton}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedPeriod}
            <ChevronDown
              size={18}
              className={`${styles.dropdownArrow} ${
                isDropdownOpen ? styles.open : ""
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button
                className={styles.dropdownItem}
                onClick={() => handlePeriodSelect("TODAY")}
              >
                TODAY
              </button>
              <button
                className={styles.dropdownItem}
                onClick={() => handlePeriodSelect("THIS WEEK")}
              >
                THIS WEEK
              </button>
              <button
                className={styles.dropdownItem}
                onClick={() => handlePeriodSelect("THIS MONTH")}
              >
                THIS MONTH
              </button>
            </div>
          )}
        </div>
      </div>
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
