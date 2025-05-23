import React from "react";
import {
  ArrowDownToLine,
  Zap,
  Trees,
  DollarSign,
  Plus,
  CheckSquare,
  MinusSquare,
  Database,
  Activity,
  LogOut,
  Edit,
  Copy,
  ChevronDown,
} from "lucide-react";
import styles from "./ProjectOverview.module.css";

const ProjectOverview: React.FC = () => {
  const metrics = [
    {
      value: "25,123",
      label: "Average Annual Emission Reduction",
      icon: ArrowDownToLine,
      bgColor: "var(--color-purple-light)",
      iconColor: "var(--color-purple)",
    },
    {
      value: "40 GWh",
      label: "Annual generation",
      icon: Zap,
      bgColor: "var(--color-green-light)",
      iconColor: "var(--color-primary-500)",
    },
    {
      value: "15 Years",
      label: "Crediting Period",
      icon: Trees,
      bgColor: "var(--color-purple-light)",
      iconColor: "var(--color-purple)",
    },
    {
      value: "$15,000",
      label: "Projected Revenue",
      icon: DollarSign,
      bgColor: "var(--color-orange-light)",
      iconColor: "var(--color-orange)",
    },
  ];

  const progressSteps = [
    {
      id: 1,
      label: "Creation",
      status: "active",
      icon: Plus,
    },
    {
      id: 2,
      label: "Project Concept Note",
      status: "pending",
      icon: CheckSquare,
    },
    {
      id: 3,
      label: "PDD Submission",
      status: "pending",
      icon: MinusSquare,
    },
    {
      id: 4,
      label: "Authorization",
      status: "pending",
      icon: Database,
    },
    {
      id: 5,
      label: "Project Monitoring",
      status: "pending",
      icon: Activity,
    },
    {
      id: 6,
      label: "Credit's Issued",
      status: "pending",
      icon: LogOut,
    },
  ];

  return (
    <section className={styles.overviewContainer}>
      <div className={styles.headerActions}>
        <button className={styles.actionButton}>
          <Edit size={16} />
          Edit Project
        </button>
        <button className={styles.actionButton}>
          <Copy size={16} />
          View Project
        </button>
      </div>

      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={styles.metricCard}
            style={{ backgroundColor: metric.bgColor }}
          >
            <div className={styles.metricIcon}>
              <metric.icon size={40} color={metric.iconColor} />
            </div>
            <div className={styles.metricDetails}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.timelineWrapper}>
        <div className={styles.dottedLineTop}></div>

        <div className={styles.youAreHereContainer}>
          <span className={styles.youAreHereLabel}>You're Here</span>
          <ChevronDown size={16} color="var(--color-primary-600)" />
        </div>

        <div className={styles.timelineContainer}>
          {progressSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className={styles.timelineStep}>
                <div
                  className={`${styles.progressCircle} ${styles[step.status]}`}
                >
                  <step.icon size={20} />
                </div>

                <span className={`${styles.stepLabel} ${styles[step.status]}`}>
                  {step.label}
                </span>
              </div>

              {index < progressSteps.length - 1 && (
                <div className={styles.timelineStepLine}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className={styles.dottedLineBottom}></div>
      </div>
    </section>
  );
};

export default React.memo(ProjectOverview);
