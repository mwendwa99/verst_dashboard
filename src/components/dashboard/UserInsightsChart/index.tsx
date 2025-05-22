import React, { useMemo } from "react";
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
  const processedData = useMemo(() => {
    const adminData = data.find((item) => item.role === "admin");
    const proponentData = data.find((item) => item.role !== "admin");
    return adminData && proponentData ? [adminData, proponentData] : data;
  }, [data]);

  const COLORS = ["#5831e8", "#19bf98"];

  const getLabelPosition = (percentage: number, index: number) => {
    const startAngle =
      index === 0 ? -280 : -280 + (processedData[0]?.percentage / 100) * 360;
    const midAngle = startAngle + ((percentage / 100) * 360) / 2;
    const radius = 55;
    const divisor = 2;
    const x = 50 + (radius * Math.cos((midAngle * Math.PI) / 180)) / divisor;
    const y = 50 + (radius * Math.cos((midAngle * Math.PI) / 180)) / divisor;

    return { x: `${x}%`, y: `${y}%` };
  };

  const firstCellData = processedData.slice(0, 1);
  const remainingCellsData = processedData.slice(1);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>User Insights</h3>
      <div className={styles.userCount}>{totalUsers} total users</div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={remainingCellsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              startAngle={-280 + (firstCellData[0]?.percentage / 100) * 360}
              dataKey="percentage"
              animationDuration={800}
            >
              {remainingCellsData.map((_, index) => (
                <Cell
                  key={`cell-${index + 1}`}
                  fill={COLORS[(index + 1) % COLORS.length]}
                  stroke="none"
                  strokeWidth={0}
                  style={{
                    transformOrigin: "center",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Pie>

            <Pie
              data={firstCellData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={110}
              startAngle={-280}
              endAngle={-280 + (firstCellData[0]?.percentage / 100) * 360}
              dataKey="percentage"
              animationDuration={800}
            >
              <Cell
                fill={COLORS[0]}
                stroke="none"
                strokeWidth={0}
                style={{
                  filter:
                    "drop-shadow(0 6px 12px rgba(88, 49, 232, 0.4)) scale(1.05)",
                  transformOrigin: "center",
                  transition: "all 0.3s ease",
                }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {processedData.map((entry, index) => {
          const position = getLabelPosition(entry.percentage, index);
          return (
            <div
              key={`label-${index}`}
              className={styles.customLabel}
              style={{
                left: position.x,
                top: position.y,
              }}
            >
              {entry.percentage}%
            </div>
          );
        })}
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
