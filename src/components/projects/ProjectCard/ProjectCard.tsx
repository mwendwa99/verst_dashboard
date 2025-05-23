import React from "react";
import { MapPin, SquareArrowRight } from "lucide-react";
import type { Project } from "../../../types";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, location, description, image } = project;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.locationRow}>
        <MapPin size={18} className={styles.locationIcon} />
        <span className={styles.locationText}>{location}</span>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.statusContainer}>
          <div className={styles.statusLabel}>Status</div>
          <div className={styles.statusValue}>Authorised</div>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <button className={styles.viewMoreButton}>
        View More
        <div className={styles.arrowContainer}>
          <SquareArrowRight size={20} />
        </div>
      </button>
    </div>
  );
};

export default ProjectCard;
