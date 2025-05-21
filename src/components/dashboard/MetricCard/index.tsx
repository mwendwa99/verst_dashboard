import React from "react";
import {
  TrendingUp,
  TrendingDown,
  BarChart,
  UserRoundPlus,
  UserCheck,
  Tag,
  Users,
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
      case "tag":
        return <Tag size={24} />;
      case "user-check":
        return <UserCheck size={24} />;
      case "users":
        return <Users size={24} />;
      case "user-round-plus":
        return <UserRoundPlus size={24} />;
      default:
        return <BarChart size={24} />;
    }
  };

  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.value}>{value.toLocaleString()}</div>
        </div>
        <div className={`${styles.iconContainer} ${styles[color]}`}>
          {getIcon(icon)}
        </div>
      </div>
      <div className={`${styles.change} `}>
        <span className={`${isPositive ? styles.positive : styles.negative}`}>
          {isPositive ? (
            <TrendingUp color="#00a63c" size={12} />
          ) : (
            <TrendingDown size={12} />
          )}{" "}
          {Math.abs(change.value)}%{" "}
        </span>
        <span>Up {change.timeframe}</span>
      </div>
    </div>
  );
};

export default MetricCard;
