import React from "react";
import ProjectOverview from "../../components/projects/ProjectOverview";
import SectionCard from "../../components/projects/SectionCard";
import ProjectDetailsSection from "../../components/projects/ProjectDetails";
import ProjectImagesSection from "../../components/projects/ProjectImagesSection";
import ProjectLocationMap from "../../components/projects/ProjectLocationMap";
import SDGGoalsSection from "../../components/projects/SDGGoalsSection";
import styles from "./Projects.module.css";
import ProjectTabs from "../../components/projects/ProjectTabs";

const ProjectList: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <div style={{ margin: "var(--spacing-6) 0" }}>
        <ProjectOverview />
      </div>
      <div style={{ margin: "var(--spacing-6) 0" }}>
        <ProjectTabs />
      </div>

      <SectionCard title="Project Summary">
        <p className={styles.summaryText}>
          The Kilifi Solar Project aims to provide sustainable and affordable
          solar energy solutions to rural communities in Kilifi County. This
          initiative focuses on installing solar panels for households and small
          businesses, reducing reliance on traditional energy sources, and
          promoting environmental sustainability. The project also includes
          community training programs on solar panel maintenance and energy
          conservation.
        </p>
      </SectionCard>

      <div className={styles.twoColumnGrid}>
        <SectionCard title="Project Details">
          <ProjectDetailsSection />
        </SectionCard>
        <SectionCard title="Project Images">
          <ProjectImagesSection />
        </SectionCard>
      </div>

      <SectionCard title="Project Location" fullWidth>
        <ProjectLocationMap />
      </SectionCard>

      <SectionCard title="500 Goals" fullWidth>
        <SDGGoalsSection />
      </SectionCard>
    </main>
  );
};

export default ProjectList;
