import React from "react";
import { Search, Bell, Settings } from "lucide-react";
import { useAppContext } from "../../../context/AppContext";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { user } = useAppContext();

  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search here..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.notifications}>
          <Bell size={20} color="#4B5563" />
          <span className={styles.notificationBadge}>12</span>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.userDetails}>
            <span className={styles.userName}>
              <span style={{ fontWeight: 300 }}>Hello,</span> {user.name}
            </span>
            <span className={styles.userRole}>Project Originator</span>
          </div>
          <div className={styles.avatar}>
            <img
              src={
                user.avatar || "https://randomuser.me/api/portraits/men/32.jpg"
              }
              alt={user.name}
            />
          </div>
          <div className={styles.settingsIcon}>
            <Settings size={20} color="#fff" />
            <span className={styles.settingsBadge}>!</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
