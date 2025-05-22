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

  // Calculate label positions
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

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>User Insights</h3>
      <div className={styles.userCount}>{totalUsers} total users</div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={processedData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              startAngle={-280}
              dataKey="percentage"
              animationDuration={800}
            >
              {processedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke={index === 0 ? "none" : "none"}
                  strokeWidth={0}
                  style={{
                    filter:
                      index === 0
                        ? "drop-shadow(0 6px 12px rgba(88, 49, 232, 0.4)) scale(1.05)"
                        : "none",
                    transformOrigin: "center",
                    transition: "all 0.3s ease",
                  }}
                />
                // <Cell
                //   key={`cell-${index}`}
                //   fill={COLORS[index % COLORS.length]}
                //   style={{
                //     filter: `drop-shadow(0px 0px 5px ${
                //       COLORS[index % COLORS.length]
                //     }`,
                //   }}
                //   stroke="0"
                // />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Custom positioned labels */}
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
