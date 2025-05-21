import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Project } from '../../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, location, description, image, status } = project;
  
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.status}>{status.charAt(0).toUpperCase() + status.slice(1)}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.location}>
          <MapPin size={12} />
          <span>{location}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>
          View More
          <span className={styles.buttonIcon}>
            <ArrowRight size={16} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;