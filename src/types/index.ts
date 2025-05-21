export interface User {
  id: string;
  name: string;
  role: 'admin' | 'proponent';
  avatar?: string;
}

export interface MetricCard {
  id: string;
  title: string;
  value: number | string;
  change: {
    value: number;
    timeframe: string;
  };
  icon: string;
  color: 'pink' | 'orange' | 'green' | 'purple';
}

export interface ProjectCategory {
  id: string;
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  status: 'approved' | 'pending' | 'rejected';
  description: string;
  image: string;
  category: string;
}

export interface ChartData {
  name: string;
  approved: number;
  pending: number;
  rejected: number;
}

export interface UserInsight {
  id: string;
  role: 'admin' | 'proponent';
  percentage: number;
}

export interface RegionData {
  id: string;
  name: string;
  hasProjects: boolean;
}

export interface Notification {
  id: string;
  message: string;
  date: string;
  read: boolean;
}