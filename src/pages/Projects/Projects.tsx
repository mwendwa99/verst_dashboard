import React from 'react';
import { useAppContext } from '../../context/AppContext';
import ProjectStats from '../../components/projects/ProjectStats/ProjectStats';
import ProjectFilters from '../../components/projects/ProjectFilters/ProjectFilters';
import ProjectCard from '../../components/projects/ProjectCard/ProjectCard';
import NotificationsList from '../../components/notifications/NotificationsList/NotificationsList';
import styles from './Projects.module.css';
import { mockProjectStats } from '../../data/mockData';

const Projects: React.FC = () => {
  const { projects, notifications } = useAppContext();
  const { totalProjects, creditsIssued, expectedCredits, totalProjected } = mockProjectStats;
  
  return (
    <div className={styles.projects}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      
      <ProjectStats 
        totalProjects={totalProjects}
        creditsIssued={creditsIssued}
        expectedCredits={expectedCredits}
        totalProjected={totalProjected}
      />
      
      <div className={styles.container}>
        <ProjectFilters title="Authorised Projects" />
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      
      <div>
        <NotificationsList notifications={notifications} />
      </div>
    </div>
  );
};

export default Projects;