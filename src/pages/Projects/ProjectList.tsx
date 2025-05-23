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

      <SectionCard
        title="Project Summary"
        headerActions={
          <>
            <button className={styles.viewLetterBtn}>
              VIEW LETTER OF NO OBJECTION
            </button>
            <button className={styles.approvedBtn}>Approved</button>
          </>
        }
      >
        <div>
          <h3 className={styles.sectionTitle}>Project Description</h3>
          <p className={styles.summaryText}>
            The project aims to address the lack of reliable and sustainable
            electricity in the rural areas of Kilifi County, located on the
            Kenyan coast. This initiative is designed to harness the abundant
            solar energy in the region, transforming it into a reliable source
            of power for the local community.
          </p>
        </div>
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
