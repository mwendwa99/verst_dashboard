import React from "react";
import {
  TrendingUp,
  TrendingDown,
  BarChart,
  CheckCircle,
  UserCheck,
  Users,
  AlertTriangle,
} from "lucide-react";
import type { MetricCard as MetricCardType } from "../../../types";
import styles from "./MetricCard.module.css";

interface MetricCardProps {
  data: MetricCardType;
}

const MetricCard: React.FC<MetricCardProps> = ({ data }) => {
  const { title, value, change, icon, color } = data;
  const isPositive = change.value > 0;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "bar-chart":
        return <BarChart size={24} />;
      case "check-circle":
        return <CheckCircle size={24} />;
      case "user-check":
        return <UserCheck size={24} />;
      case "users":
        return <Users size={24} />;
      case "alert-triangle":
        return <AlertTriangle size={24} />;
      default:
        return <BarChart size={24} />;
    }
  };

  return (
    <div className={styles.card}>
      <div className={`${styles.iconContainer} ${styles[color]}`}>
        {getIcon(icon)}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value.toLocaleString()}</div>
        <div
          className={`${styles.change} ${
            isPositive ? styles.positive : styles.negative
          }`}
        >
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span>
            {Math.abs(change.value)}% Up {change.timeframe}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
