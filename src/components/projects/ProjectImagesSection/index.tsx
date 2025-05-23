import React from "react";
import styles from "./ProjectImagesSection.module.css";

const images = [
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400&q=80",
  "https://plus.unsplash.com/premium_photo-1681140560805-2d81ba3118bd?auto=format&fit=crop&w=400&q=80",
  "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?auto=format&fit=crop&w=400&q=80",
];

const ProjectImagesSection: React.FC = () => (
  <div className={styles.imagesLayout}>
    <div className={styles.mainImageWrapper}>
      <img
        src={images[0]}
        alt="Project Main"
        className={styles.mainImage}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/400x200?text=Image";
        }}
      />
    </div>
    <div className={styles.subImagesWrapper}>
      <img
        src={images[1]}
        alt="Project Sub 1"
        className={styles.subImage}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/180x120?text=Image";
        }}
      />
      <img
        src={images[2]}
        alt="Project Sub 2"
        className={styles.subImage}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/180x120?text=Image";
        }}
      />
    </div>
  </div>
);

export default React.memo(ProjectImagesSection);
