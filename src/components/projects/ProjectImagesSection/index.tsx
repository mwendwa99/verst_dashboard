import React from "react";
import styles from "./ProjectImagesSection.module.css";

const ProjectImagesSection: React.FC = () => {
  const images = [
    "https://placehold.co/120x90/e0e0e0/555555?text=Image+1",
    "https://placehold.co/120x90/e0e0e0/555555?text=Image+2",
    "https://placehold.co/120x90/e0e0e0/555555?text=Image+3",
  ];

  return (
    <div className={styles.imagesGrid}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Project Image ${index + 1}`}
          className={styles.projectImage}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/120x90/e0e0e0/555555?text=Error";
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(ProjectImagesSection);
