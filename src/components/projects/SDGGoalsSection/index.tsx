import React from "react";
import styles from "./SDGGoalsSection.module.css";

const goals = [
  {
    id: 1,
    number: "1.",
    title: "No Poverty",
    image: "/images/sdg_icon_3.png",
    color: "#e5243b",
    description:
      "The CDM project activity for GHG emission reduction by catalytic N2O destruction was implemented in Abu Qir, Egypt in year 2006. The project activity includes development, design, engineering, procurement, finance, construction, operation and maintenance of a system for catalytic reduction of N2O. The EnviNOx® process used in the nitric acid (hereinafter called “NA”) plant II of Abu Qir Fertilizer Co. (hereinafter called “AFC”) is based on the catalytic reduction of NOx (NO and NO2) with ammonia (NH3) and ] beds.",
  },
  {
    id: 3,
    number: "3.",
    title: "Good Health and Well-being",
    image: "/images/sdg_icon_1.png",
    color: "#4c9f38",
    description:
      "The CDM project activity for GHG emission reduction by catalytic N2O destruction was implemented in Abu Qir, Egypt in year 2006. The project activity includes development, design, engineering, procurement, finance, construction, operation and maintenance of a system for catalytic reduction of N2O. The EnviNOx® process used in the nitric acid (hereinafter called “NA”) plant II of Abu Qir Fertilizer Co. (hereinafter called “AFC”) is based on the catalytic reduction of NOx (NO and NO2) with ammonia (NH3) and of nitrous",
  },
  {
    id: 4,
    number: "4.",
    title: "Quality Education",
    image: "/images/sdg_icon_2.png",
    color: "#c5192d",
    description:
      "The CDM project activity for GHG emission reduction by catalytic N2O destruction was implemented in Abu Qir, Egypt in year 2006. The project activity includes development, design, engineering, procurement, finance, construction, operation and maintenance of a system for catalytic reduction of N2O. The EnviNOx® process used in the nitric acid (hereinafter called “NA”) plant II of Abu Qir Fertilizer Co. (hereinafter called “AFC”) is based on the catalytic reduction",
  },
];

const SDGGoalsSection: React.FC = () => (
  <div className={styles.goalsGrid}>
    {goals.map((goal) => (
      <div key={goal.id} className={styles.goalCard}>
        <div
          className={styles.goalHeader}
          style={{ backgroundColor: goal.color }}
        >
          <img
            src={goal.image}
            alt={goal.title}
            className={styles.goalImage}
            draggable={false}
          />
          <div className={styles.goalHeaderText}>
            <span className={styles.goalNumber}>{goal.number}</span>
            <span className={styles.goalTitle}>{goal.title}</span>
          </div>
        </div>
        <div className={styles.goalBody}>
          <div className={styles.goalBodyTitle}>
            SDG Implementation Description
          </div>
          <div className={styles.goalDescription}>{goal.description}</div>
        </div>
      </div>
    ))}
  </div>
);

export default React.memo(SDGGoalsSection);
