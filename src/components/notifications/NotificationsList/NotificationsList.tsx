import React from 'react';
import { Notification } from '../../../types';
import styles from './NotificationsList.module.css';

interface NotificationsListProps {
  notifications: Notification[];
}

const NotificationsList: React.FC<NotificationsListProps> = ({ notifications }) => {
  // Format date to relative time (e.g., "2 days ago")
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffInDays} days ago`;
    }
  };
  
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Notifications</h3>
      
      {notifications.length === 0 ? (
        <div className={styles.noNotifications}>
          There are no new notifications that need your attention at the moment!
        </div>
      ) : (
        <div className={styles.list}>
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`${styles.notificationItem} ${notification.read ? styles.read : ''}`}
            >
              <div className={styles.notificationMessage}>
                {notification.message}
              </div>
              <div className={styles.notificationTime}>
                {getRelativeTime(notification.date)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsList;