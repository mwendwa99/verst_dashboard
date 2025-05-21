import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type {
  User,
  MetricCard,
  ProjectCategory,
  Project,
  ChartData,
  UserInsight,
  RegionData,
  Notification,
} from "../types";
import {
  mockUser,
  mockMetricCards,
  mockProjectCategories,
  mockProjects,
  mockChartData,
  mockUserInsights,
  mockRegions,
  mockNotifications,
} from "../data/mockData";

interface AppContextType {
  user: User;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setIsSidebarOpen: (isOpen: boolean) => void; // Added for responsive control
  metricCards: MetricCard[];
  projectCategories: ProjectCategory[];
  projects: Project[];
  chartData: ChartData[];
  userInsights: UserInsight[];
  regions: RegionData[];
  notifications: Notification[];
  totalUsers: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user] = useState<User>(mockUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [metricCards] = useState<MetricCard[]>(mockMetricCards);
  const [projectCategories] = useState<ProjectCategory[]>(
    mockProjectCategories
  );
  const [projects] = useState<Project[]>(mockProjects);
  const [chartData] = useState<ChartData[]>(mockChartData);
  const [userInsights] = useState<UserInsight[]>(mockUserInsights);
  const [regions] = useState<RegionData[]>(mockRegions);
  const [notifications] = useState<Notification[]>(mockNotifications);
  const [totalUsers] = useState<number>(856);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check for mobile screens on initial load
  useEffect(() => {
    const handleResize = () => {
      // Set sidebar collapsed on mobile screens
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Set initial state
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        isSidebarOpen,
        toggleSidebar,
        setIsSidebarOpen, // Exposing the setter for responsive control
        metricCards,
        projectCategories,
        projects,
        chartData,
        userInsights,
        regions,
        notifications,
        totalUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
