import React from "react";
import { useAppContext } from "../../context/AppContext";
import ProjectStats from "../../components/projects/ProjectStats";
import ProjectFilters from "../../components/projects/ProjectFilters/ProjectFilters";
import ProjectCard from "../../components/projects/ProjectCard/ProjectCard";
import NotificationsList from "../../components/notifications/NotificationsList";
import styles from "./Article.module.css";
import { mockProjectStats } from "../../data/mockData";

const Projects: React.FC = () => {
  const { projects, notifications } = useAppContext();
  const { totalProjects, creditsIssued, expectedCredits, totalProjected } =
    mockProjectStats;

  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <div className={styles.section}>
        <ProjectStats
          totalProjects={totalProjects}
          creditsIssued={creditsIssued}
          expectedCredits={expectedCredits}
          totalProjected={totalProjected}
        />
        <div className={styles.mainGrid}>
          <div className={styles.leftCol}>
            <ProjectFilters title="Authorised Projects" />
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          <aside className={styles.sidebar}>
            <NotificationsList notifications={notifications} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Projects;
