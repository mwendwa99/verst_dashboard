import React from "react";
import { Users, Zap, Calendar, DollarSign, CheckCircle } from "lucide-react";
import styles from "./ProjectOverview.module.css";

const ProjectOverview: React.FC = () => {
  const metrics = [
    { value: "25.123", label: "Users", icon: Users },
    { value: "10.0wh", label: "Energy Generated", icon: Zap },
    { value: "16", label: "Years", icon: Calendar },
    { value: "$15.000", label: "Budget", icon: DollarSign },
  ];

  const progressSteps = [
    { id: 1, status: "completed" },
    { id: 2, status: "completed" },
    { id: 3, status: "active" },
    { id: 4, status: "pending" },
    { id: 5, status: "pending" },
  ];

  return (
    <section className={styles.overviewContainer}>
      <h1 className={styles.projectTitle}>Kilifi Solar Project</h1>

      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricItem}>
            <metric.icon size={24} color="#5831e8" />
            <span className={styles.metricValue}>{metric.value}</span>
            <span className={styles.metricLabel}>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.progressBarContainer}>
        {progressSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`${styles.progressCircle} ${styles[step.status]}`}>
              {step.status === "completed" && (
                <CheckCircle size={16} color="#fff" />
              )}{" "}
            </div>
            {index < progressSteps.length - 1 && (
              <div
                className={`${styles.progressLine} ${
                  step.status === "completed" ? styles.completed : ""
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ProjectOverview);
