import React from "react";
import { Users } from "lucide-react";
import styles from "./UserManagement.module.css";

const UserManagement: React.FC = () => {
  return (
    <div className={styles.userManagement}>
      <h1 className={styles.pageTitle}>User Management</h1>

      <div className={styles.placeholder}>
        <Users size={48} color="#4b5563" style={{ margin: "0 auto 1rem" }} />
        <h2 className={styles.placeholderTitle}>User Management Page</h2>
      </div>
    </div>
  );
};

export default UserManagement;
