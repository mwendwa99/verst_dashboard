import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import type { UserInsight } from "../../../types";
import styles from "./UserInsightsChart.module.css";

interface UserInsightsChartProps {
  data: UserInsight[];
  totalUsers: number;
}

const UserInsightsChart: React.FC<UserInsightsChartProps> = ({
  data,
  totalUsers,
}) => {
  const COLORS = ["var(--color-chart-purple)", "var(--color-green)"];

  // Finding the admin percentage for displaying in the center
  const adminPercentage =
    data.find((item) => item.role === "admin")?.percentage || 0;

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>User Insights</h3>
      <div className={styles.userCount}>{totalUsers} total users</div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="percentage"
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.chartLabel}>
          <span className={styles.percentValue}>{adminPercentage}%</span>
          Admins
        </div>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.admin}`}></span>
          <span>Admins</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.proponent}`}></span>
          <span>Proponents</span>
        </div>
      </div>
    </div>
  );
};

export default UserInsightsChart;
