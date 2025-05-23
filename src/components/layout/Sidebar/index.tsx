import React, { useState, memo, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  Settings,
  ChevronsLeft,
  ChevronsRight,
  CreditCard,
  Copy,
  CircleUserRound,
  PlusCircle,
  List,
  FileText,
  ChevronDown,
  Check,
  SquareCheck,
  Menu,
} from "lucide-react";
import { useAppContext } from "../../../context/AppContext";
import styles from "./Sidebar.module.css";

const menuItems = [
  {
    path: "/",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    path: "/committee",
    label: "Committee",
    icon: <CreditCard size={20} />,
  },
  {
    path: "/projects",
    label: "Projects Management",
    icon: <Copy size={20} />,
    submenuItems: [
      {
        path: "/projects/add",
        label: "Add Projects",
        icon: <PlusCircle size={18} />,
      },
      {
        path: "/projects/list",
        label: "Project Lists",
        icon: <List size={18} />,
      },
    ],
  },
  {
    path: "/article-6",
    label: "Article 6 Projects",
    icon: <FileText size={20} />,
    submenuItems: [
      {
        path: "/article-6/seek-authorization",
        label: "Seek Authorization",
        icon: <Check size={18} />,
      },
      {
        path: "/article-6/authorized",
        label: "Authorized Projects",
        icon: <SquareCheck size={18} />,
      },
    ],
  },
  {
    path: "/users",
    label: "User Management",
    icon: <CircleUserRound size={20} />,
  },
  {
    path: "/compliance",
    label: "Compliance Monitoring",
    icon: <CreditCard size={20} />,
  },
  {
    path: "/analytics",
    label: "Data Analytics and Reports",
    icon: <BarChart2 size={20} />,
  },
  {
    path: "/settings",
    label: "System Settings",
    icon: <Settings size={20} />,
  },
];

const SubMenu = memo(({ isOpen, items }) => (
  <ul
    className={`${styles.subMenu}
${isOpen ? styles.open : ""}`}
  >
    {items.map((item) => (
      <li key={item.path} className={styles.navItem}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`${styles.navIcon} ${isActive ? styles.active : ""}`}
              >
                {item.icon}
              </span>
              <span className={styles.navText}>{item.label}</span>
            </>
          )}
        </NavLink>
      </li>
    ))}
  </ul>
));

const MenuItem = memo(
  ({
    item,
    location,
    hasSubmenu = false,
    children,
    isSidebarOpen,
    isMobile,
  }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(
      hasSubmenu &&
        item.submenuItems?.some((subItem) =>
          location.pathname.includes(subItem.path.split("/").filter(Boolean)[0])
        )
    );

    const isActive = hasSubmenu
      ? item.submenuItems?.some((subItem) =>
          location.pathname.includes(subItem.path.split("/").filter(Boolean)[0])
        )
      : location.pathname === item.path ||
        location.pathname.includes(item.path.split("/").filter(Boolean)[0]);

    const handleClick = (e) => {
      if (hasSubmenu) {
        e.preventDefault();
        setIsOpen(!isOpen);
      } else if (!isSidebarOpen && !isMobile) {
        e.preventDefault();
        navigate(item.path);
      }
    };

    return (
      <li
        className={`${styles.navItem} ${isActive ? styles.active : ""} ${
          hasSubmenu ? styles.navItemWithSubmenu : ""
        } ${isOpen ? styles.open : ""}`}
      >
        <NavLink
          to={hasSubmenu ? "#" : item.path}
          className={({ isActive: linkActive }) =>
            `${styles.navLink} ${
              linkActive && !hasSubmenu ? styles.active : ""
            } ${isActive && hasSubmenu ? styles.active : ""}`
          }
          onClick={handleClick}
        >
          {({ isActive: linkActive }) => (
            <>
              <span
                className={`${styles.navIcon} ${
                  (linkActive && !hasSubmenu) || (isActive && hasSubmenu)
                    ? styles.active
                    : ""
                }`}
              >
                {item.icon}
              </span>
              <span className={styles.navText}>{item.label}</span>
              {hasSubmenu && (
                <ChevronDown
                  size={16}
                  className={`${styles.submenuArrow} ${
                    isOpen ? styles.open : ""
                  }`}
                />
              )}
            </>
          )}
        </NavLink>
        {children && isOpen && children}
      </li>
    );
  }
);

const Sidebar = () => {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      {}
      {isMobile && !isSidebarOpen && (
        <button className={styles.mobileToggle} onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      )}

      <aside
        className={`${styles.sidebar} ${isSidebarOpen ? "" : styles.collapsed}`}
      >
        <div className={styles.logo}>
          <img
            src="/images/ministry_logo.png"
            alt="Ministry of Environment & Forestry"
          />
        </div>

        <button className={styles.toggleButton} onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <ChevronsLeft size={16} />
          ) : (
            <ChevronsRight size={16} />
          )}
        </button>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {menuItems.map((item) =>
              item.submenuItems ? (
                <MenuItem
                  key={item.path}
                  item={item}
                  location={location}
                  hasSubmenu={true}
                  isSidebarOpen={isSidebarOpen}
                  isMobile={isMobile}
                >
                  <SubMenu isOpen={true} items={item.submenuItems} />
                </MenuItem>
              ) : (
                <MenuItem
                  key={item.path}
                  item={item}
                  location={location}
                  isSidebarOpen={isSidebarOpen}
                  isMobile={isMobile}
                />
              )
            )}
          </ul>
        </nav>

        <div className={styles.footer}>
          <span>Verst Carbon</span>
          <span>© 2024 All Rights Reserved</span>
          <span>Made with ❤️ by Verst Carbon</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
