import React, { type ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useAppContext } from "../../../context/AppContext";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isSidebarOpen } = useAppContext();

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main
        className={`${styles.main} ${isSidebarOpen ? "" : styles.collapsed}`}
      >
        <Header />
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
