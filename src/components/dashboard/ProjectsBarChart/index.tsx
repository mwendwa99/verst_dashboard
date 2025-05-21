import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ChartData } from "../../../types";
import styles from "./ProjectsBarChart.module.css";

interface ProjectsBarChartProps {
  data: ChartData[];
}

// Custom Tooltip component
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any[];
  label: string;
}) => {
  if (active && payload && payload.length) {
    const totalApproved = payload.reduce((sum, entry) => {
      if (entry.dataKey === "approved") {
        return sum + entry.value;
      }
      return sum;
    }, 0);

    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipLabel}>{label} 2024</p>
        <div className={styles.tooltipLine}></div>
        <p className={styles.tooltipTotal}>
          Total Approved Projects:{" "}
          <span style={{ fontWeight: "var(--font-weight-bold)" }}>
            {totalApproved}
          </span>
        </p>
        <div className={styles.tooltipArrow}></div>
      </div>
    );
  }

  return null;
};

const ProjectsBarChart: React.FC<ProjectsBarChartProps> = ({ data }) => {
  return (
    <div className={styles.chartContainer}>
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
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--color-gray-100)" // X-axis line color
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 500,
                fill: "var(--color-gray-400)",
              }}
              axisLine={{ stroke: "var(--color-gray-300)" }} // X-axis line color
            />
            <Tooltip
              cursor={{ fill: "#ddead5" }} // Hover effect background color
              content={<CustomTooltip active={false} payload={[]} label="" />}
            />
            <Bar
              dataKey="approved"
              name="Approved Projects"
              fill="var(--color-chart-green)"
              animationDuration={1000}
            />
            <Bar
              dataKey="pending"
              name="Pending Projects"
              fill="var(--color-chart-purple)"
              animationDuration={1000}
            />
            <Bar
              dataKey="rejected"
              name="Rejected Projects"
              fill="var(--color-chart-orange)"
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
