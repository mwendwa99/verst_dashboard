import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText,
  BarChart2,
  FileBox,
  Settings,
  ChevronsLeft,
  ChevronsRight,
  UserCheck,
  CheckCircle
} from 'lucide-react';
import { useAppContext } from '../../../context/AppContext';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useAppContext();

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? '' : styles.collapsed}`}>
      <div className={styles.logo}>
        <img 
          src="https://www.environment.go.ke/wp-content/uploads/2021/07/MOEF_LOGO-1.png" 
          alt="Ministry of Environment & Forestry" 
        />
      </div>
      
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isSidebarOpen ? <ChevronsLeft size={16} /> : <ChevronsRight size={16} />}
      </button>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${location.pathname === '/' ? styles.active : ''}`}>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.navIcon}>
                <LayoutDashboard size={20} />
              </span>
              <span className={styles.navText}>Dashboard</span>
            </NavLink>
          </li>
          
          <li className={`${styles.navItem} ${location.pathname.includes('/committee') ? styles.active : ''}`}>
            <NavLink 
              to="/committee" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.navIcon}>
                <Users size={20} />
              </span>
              <span className={styles.navText}>Committee</span>
            </NavLink>
          </li>
          
          <li className={`${styles.navItem} ${location.pathname.includes('/projects') ? styles.active : ''}`}>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.navIcon}>
                <FileText size={20} />
              </span>
              <span className={styles.navText}>Projects Management</span>
            </NavLink>
          </li>
          
          <li className={`${styles.navItem} ${location.pathname.includes('/users') ? styles.active : ''}`}>
            <NavLink 
              to="/users" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.navIcon}>
                <UserCheck size={20} />
              </span>
              <span className={styles.navText}>User Management</span>
            </NavLink>
          </li>
          
          <li className={`${styles.navItem} ${location.pathname.includes('/compliance') ? styles.active : ''}`}>
            <NavLink 
              to="/compliance" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.navIcon}>
                <CheckCircle size={20} />
              </span>
              <span className={styles.navText}>Compliance Monitoring</span>
            </NavLink>
          </li>
          
          <li className={`${styles.navItem} ${location.pathname.includes('/analytics') ? styles.active : ''}`}>
            <NavLink 
              to="/analytics" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.navIcon}>
                <BarChart2 size={20} />
              </span>
              <span className={styles.navText}>Data Analytics and Reports</span>
            </NavLink>
          </li>
          
          <li className={`${styles.navItem} ${location.pathname.includes('/settings') ? styles.active : ''}`}>
            <NavLink 
              to="/settings" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.navIcon}>
                <Settings size={20} />
              </span>
              <span className={styles.navText}>System Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className={styles.footer}>
        <div>Vent Carbon</div>
        <div>© 2024 All Rights Reserved</div>
        <div>Made with ❤️ by Vent Carbon</div>
      </div>
    </aside>
  );
};

export default Sidebar;