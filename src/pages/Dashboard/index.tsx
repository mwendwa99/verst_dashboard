import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import MetricCard from "../../components/dashboard/MetricCard";
import CategoryTabs from "../../components/dashboard/CategoryTabs";
import UserInsightsChart from "../../components/dashboard/UserInsightsChart";
import KenyaMap from "../../components/dashboard/KenyaMap";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  const {
    metricCards,
    projectCategories,
    chartData,
    userInsights,
    regions,
    totalUsers,
  } = useAppContext();
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
    <div className={styles.dashboard}>
      <div className={styles.card}>
        <div className={styles.headerWithFilter}>
          <div>
            <h1 className={styles.pageTitle}>Statistics</h1>
            <div className={styles.pageSubtitle}>Dashboard Summary</div>
          </div>
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

        <div className={styles.metricsGrid}>
          {metricCards.map((card) => (
            <MetricCard key={card.id} data={card} />
          ))}
        </div>
      </div>

      <CategoryTabs categories={projectCategories} chartData={chartData} />

      <div className={styles.chartsGrid}>
        <UserInsightsChart data={userInsights} totalUsers={totalUsers} />
        <KenyaMap regions={regions} />
      </div>
    </div>
  );
};

export default Dashboard;
