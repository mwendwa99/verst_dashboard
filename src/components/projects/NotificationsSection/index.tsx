import React from "react";
import styles from "./NotificationsSection.module.css";

interface Notification {
  id: string;
  title: string;
  message: string;
  daysRemaining: number;
  progress: number;
  type: "warning" | "info" | "success";
}

const NotificationsSection: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: "1",
      title: "Kilifi Solar Project",
      message: "314 days remaining for a Letter of No Objection to be issued",
      daysRemaining: 314,
      progress: 75,
      type: "warning",
    },
  ];

  return (
    <div className={styles.notificationsContainer}>
      <h3 className={styles.notificationsTitle}>Notifications</h3>
      <div className={styles.notificationsList}>
        {notifications.map((notification) => (
          <div key={notification.id} className={styles.notificationCard}>
            <div className={styles.notificationHeader}>
              <span className={styles.notificationTitle}>
                {notification.title}
              </span>
              <button className={styles.closeBtn}>×</button>
            </div>
            <p className={styles.notificationMessage}>{notification.message}</p>
            <div className={styles.progressContainer}>
              <div
                className={styles.progressBar}
                style={{ width: `${notification.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;
