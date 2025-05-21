import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ChartData } from "../../../types";
import styles from "./ProjectsBarChart.module.css";

interface ProjectsBarChartProps {
  data: ChartData[];
}

const ProjectsBarChart: React.FC<ProjectsBarChartProps> = ({ data }) => {
  // Calculate total approved projects for the month
  const totalApproved = data.reduce((total, item) => total + item.approved, 0);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Projects Overview</h3>
        <span className={styles.period}>April 2024</span>
      </div>

      <div className={styles.projectCount}>
        Total Approved projects: <span>{totalApproved}</span>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-gray-200)",
                borderRadius: "var(--border-radius-sm)",
                boxShadow: "var(--shadow-md)",
              }}
            />
            <Bar
              dataKey="approved"
              name="Approved Projects"
              fill="var(--color-chart-green)"
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
            />
            <Bar
              dataKey="pending"
              name="Pending Projects"
              fill="var(--color-chart-purple)"
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
            />
            <Bar
              dataKey="rejected"
              name="Rejected Projects"
              fill="var(--color-chart-orange)"
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.approved}`}></span>
          <span>Approved Projects</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.pending}`}></span>
          <span>Pending Projects</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.rejected}`}></span>
          <span>Rejected Projects</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBarChart;
