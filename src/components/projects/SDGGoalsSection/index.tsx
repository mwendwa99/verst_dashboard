import React from "react";
import { Users, Heart, GraduationCap } from "lucide-react";
import styles from "./SDGGoalsSection.module.css";

const SDGGoalsSection: React.FC = () => {
  const goals = [
    {
      id: 1,
      title: "No Poverty",
      description:
        "SDG Goal 1 ensures that no one is left behind and aims to eradicate extreme poverty for all people everywhere.",
      icon: Users,
      color: "#e5243b",
    },
    {
      id: 2,
      title: "Good Health and Well-being",
      description:
        "SDG Goal 3 aims to ensure healthy lives and promote well-being for all at all ages.",
      icon: Heart,
      color: "#4c9f38",
    },
    {
      id: 3,
      title: "Quality Education",
      description:
        "SDG Goal 4 ensures inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      icon: GraduationCap,
      color: "#c5192d",
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
            <goal.icon size={40} color="#fff" />
            <h3 className={styles.goalTitle}>{goal.title}</h3>
          </div>
          <p className={styles.goalDescription}>{goal.description}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(SDGGoalsSection);
