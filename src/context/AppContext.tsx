import React, { createContext, useContext, useState, ReactNode } from "react";
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

  return (
    <AppContext.Provider
      value={{
        user,
        isSidebarOpen,
        toggleSidebar,
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
