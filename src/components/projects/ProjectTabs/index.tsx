import React, { useState, useCallback } from "react";
import styles from "./ProjectTabs.module.css";

const ProjectTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("PROJEC DETAILS");

  const tabs = [
    "PROJEC DETAILS",
    "PROPONENT DETAILS",
    "PROPRIETOR DETAILS",
    "SPONSER/UPFRONT BUYER",
    "CARBON EMISSIONS",
  ];

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${styles.tabItem} ${
            tab === activeTab ? styles.active : ""
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProjectTabs);
