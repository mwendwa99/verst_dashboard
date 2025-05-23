import React from "react";
import ProjectOverview from "../../components/projects/ProjectOverview";
import SectionCard from "../../components/projects/SectionCard";
import ProjectDetailsSection from "../../components/projects/ProjectDetails";
import ProjectImagesSection from "../../components/projects/ProjectImagesSection";
import ProjectLocationMap from "../../components/projects/ProjectLocationMap";
import SDGGoalsSection from "../../components/projects/SDGGoalsSection";
import styles from "./Projects.module.css";
import ProjectTabs from "../../components/projects/ProjectTabs";

const NotificationsCard = () => (
  <div className={styles.notificationsCard}>
    <div className={styles.notificationsHeader}>
      <span>Notifications</span>
    </div>
    <div className={styles.notificationItem}>
      <div className={styles.notificationTitle}>Kilifi Solar Project</div>
      <div className={styles.notificationDesc}>
        3/14 days remaining for a Letter of No Objection to be issued.
      </div>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{ width: "70%" }} />
      </div>
      <button className={styles.notificationClose}>×</button>
    </div>
  </div>
);

const ProjectList: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <div style={{ margin: "var(--spacing-6) 0" }}>
        <ProjectOverview />
      </div>
      <div style={{ margin: "var(--spacing-6) 0" }}>
        <ProjectTabs />
      </div>

      <div className={styles.topGrid}>
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
        <NotificationsCard />
      </div>

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

      <SectionCard title="SDG Goals" fullWidth>
        <SDGGoalsSection />
      </SectionCard>
    </main>
  );
};

export default ProjectList;
