import React from "react";
import styles from "./NotificationsList.module.css";

const NotificationsList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Notifications</h3>

      <div className={styles.noNotifications}>
        There are no new notifications that need your attention at the moment!
      </div>
    </div>
  );
};

export default NotificationsList;
