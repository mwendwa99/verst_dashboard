import React from 'react';
import { CalendarDays } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import MetricCard from '../../components/dashboard/MetricCard/MetricCard';
import CategoryTabs from '../../components/dashboard/CategoryTabs/CategoryTabs';
import ProjectsBarChart from '../../components/dashboard/ProjectsBarChart/ProjectsBarChart';
import UserInsightsChart from '../../components/dashboard/UserInsightsChart/UserInsightsChart';
import KenyaMap from '../../components/dashboard/KenyaMap/KenyaMap';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const { 
    metricCards, 
    projectCategories, 
    chartData, 
    userInsights, 
    regions,
    totalUsers
  } = useAppContext();
  
  return (
    <div className={styles.dashboard}>
      <div>
        <div className={styles.headerWithFilter}>
          <h1 className={styles.pageTitle}>Statistics</h1>
          <button className={styles.filterButton}>
            <CalendarDays size={16} />
            THIS WEEK
          </button>
        </div>
        <div className={styles.pageSubtitle}>Dashboard Summary</div>
      </div>
      
      <div className={styles.metricsGrid}>
        {metricCards.map((card) => (
          <MetricCard key={card.id} data={card} />
        ))}
      </div>
      
      <CategoryTabs categories={projectCategories} />
      
      <ProjectsBarChart data={chartData} />
      
      <div className={styles.chartsGrid}>
        <UserInsightsChart data={userInsights} totalUsers={totalUsers} />
        <KenyaMap regions={regions} />
      </div>
    </div>
  );
};

export default Dashboard;