import React from "react";
import { Users, Heart, GraduationCap } from "lucide-react"; // Lucide icons
import styles from "./SDGGoalsSection.module.css";

const SDGGoalsSection: React.FC = () => {
  const goals = [
    {
      id: 1,
      title: "No Poverty",
      description:
        "SDG Goal 1 ensures that no one is left behind and aims to eradicate extreme poverty for all people everywhere.",
      icon: Users, // Using Users for No Poverty as it represents people/community
      color: "#e5243b", // Red
    },
    {
      id: 2,
      title: "Good Health and Well-being",
      description:
        "SDG Goal 3 aims to ensure healthy lives and promote well-being for all at all ages.",
      icon: Heart, // Using Heart for Good Health
      color: "#4c9f38", // Green
    },
    {
      id: 3,
      title: "Quality Education",
      description:
        "SDG Goal 4 ensures inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      icon: GraduationCap, // Using GraduationCap for Quality Education
      color: "#c5192d", // Darker Red
    },
  ];

  return (
    <div className={styles.goalsGrid}>
      {goals.map((goal) => (
        <div
          key={goal.id}
          className={styles.goalCard}
          style={{ backgroundColor: goal.color }}
        >
          <div className={styles.goalHeader}>
            <goal.icon size={40} color="#fff" /> {/* Render Lucide icon */}
            <h3 className={styles.goalTitle}>{goal.title}</h3>
          </div>
          <p className={styles.goalDescription}>{goal.description}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(SDGGoalsSection);
