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

export const mockUser: User = {
  id: "1",
  name: "Brian",
  role: "admin",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
};

export const mockMetricCards: MetricCard[] = [
  {
    id: "1",
    title: "Total Registered Projects",
    value: 40689,
    change: {
      value: 8.5,
      timeframe: "from yesterday",
    },
    icon: "bar-chart",
    color: "pink",
  },
  {
    id: "2",
    title: "Total Approved Projects",
    value: 10293,
    change: {
      value: 1.3,
      timeframe: "from past week",
    },
    icon: "users",
    color: "orange",
  },
  {
    id: "3",
    title: "Total Registered Admins",
    value: 200,
    change: {
      value: 4.3,
      timeframe: "from yesterday",
    },
    icon: "tag",
    color: "green",
  },
  {
    id: "4",
    title: "Total Number of Committee",
    value: 12,
    change: {
      value: 1.8,
      timeframe: "from yesterday",
    },
    icon: "user-round-plus",
    color: "purple",
  },
  {
    id: "5",
    title: "Total Penalties & Compliance Issues",
    value: 10,
    change: {
      value: 1.8,
      timeframe: "from yesterday",
    },
    icon: "user-round-plus",
    color: "lime",
  },
];

export const mockProjectCategories: ProjectCategory[] = [
  {
    id: "1",
    name: "Energy",
    icon: "zap",
  },
  {
    id: "2",
    name: "Transport",
    icon: "truck",
  },
  {
    id: "3",
    name: "Waste",
    icon: "trash-2",
  },
  {
    id: "4",
    name: "Forestry & Land\n Use",
    icon: "tree",
  },
  {
    id: "5",
    name: "Agriculture",
    icon: "wheat",
  },
  {
    id: "6",
    name: "Industrial Processes \n& Product Use",
    icon: "factory",
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Kilifi Solar Project",
    location: "Kilifi, Kenya",
    status: "approved",
    description:
      "The project aims to address the lack of reliable and sustainable electricity in the rural areas of Kilifi County, located on the Kenyan coast. This initiative is designed to harness the abundant solar energy in the region, transforming it into a reliable source of power for the local community.",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    category: "Energy",
  },
  {
    id: "2",
    title: "Kilifi Solar Project",
    location: "Kilifi, Kenya",
    status: "approved",
    description:
      "The project aims to address the lack of reliable and sustainable electricity in the rural areas of Kilifi County, located on the Kenyan coast. This initiative is designed to harness the abundant solar energy in the region, transforming it into a reliable source of power for the local community.",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    category: "Energy",
  },
  {
    id: "3",
    title: "Kilifi Solar Project",
    location: "Kilifi, Kenya",
    status: "approved",
    description:
      "The project aims to address the lack of reliable and sustainable electricity in the rural areas of Kilifi County, located on the Kenyan coast. This initiative is designed to harness the abundant solar energy in the region, transforming it into a reliable source of power for the local community.",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    category: "Energy",
  },
  {
    id: "4",
    title: "Kilifi Solar Project",
    location: "Kilifi, Kenya",
    status: "approved",
    description:
      "The project aims to address the lack of reliable and sustainable electricity in the rural areas of Kilifi County, located on the Kenyan coast. This initiative is designed to harness the abundant solar energy in the region, transforming it into a reliable source of power for the local community.",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    category: "Energy",
  },
];

export const mockChartData: ChartData[] = [
  { name: "Jan", approved: 65, pending: 22, rejected: 15 },
  { name: "Feb", approved: 50, pending: 24, rejected: 18 },
  { name: "Mar", approved: 35, pending: 18, rejected: 12 },
  { name: "Apr", approved: 55, pending: 14, rejected: 9 },
  { name: "May", approved: 42, pending: 19, rejected: 14 },
  { name: "Jun", approved: 48, pending: 16, rejected: 12 },
  { name: "Jul", approved: 38, pending: 18, rejected: 15 },
  { name: "Aug", approved: 52, pending: 20, rejected: 16 },
  { name: "Sep", approved: 40, pending: 15, rejected: 13 },
  { name: "Oct", approved: 45, pending: 17, rejected: 14 },
  { name: "Nov", approved: 49, pending: 19, rejected: 15 },
  { name: "Dec", approved: 42, pending: 16, rejected: 12 },
];

export const mockUserInsights: UserInsight[] = [
  {
    id: "1",
    role: "admin",
    percentage: 35,
  },
  {
    id: "2",
    role: "proponent",
    percentage: 65,
  },
];

export const mockRegions: RegionData[] = [
  { id: "KE-01", name: "Mombasa", hasProjects: false },
  { id: "KE-02", name: "Kwale", hasProjects: false },
  { id: "KE-03", name: "Kilifi", hasProjects: true },
  { id: "KE-04", name: "Tana River", hasProjects: false },
  { id: "KE-05", name: "Lamu", hasProjects: false },
  { id: "KE-06", name: "Taita-Taveta", hasProjects: false },
  { id: "KE-07", name: "Garissa", hasProjects: false },
  { id: "KE-08", name: "Wajir", hasProjects: false },
  { id: "KE-09", name: "Mandera", hasProjects: false },
  { id: "KE-10", name: "Marsabit", hasProjects: false },
  { id: "KE-11", name: "Isiolo", hasProjects: false },
  { id: "KE-12", name: "Meru", hasProjects: false },
  { id: "KE-13", name: "Tharaka-Nithi", hasProjects: false },
  { id: "KE-14", name: "Embu", hasProjects: false },
  { id: "KE-15", name: "Kitui", hasProjects: true },
  { id: "KE-16", name: "Machakos", hasProjects: true },
  { id: "KE-17", name: "Makueni", hasProjects: true },
  { id: "KE-18", name: "Nyandarua", hasProjects: false },
  { id: "KE-19", name: "Nyeri", hasProjects: false },
  { id: "KE-20", name: "Kirinyaga", hasProjects: false },
  { id: "KE-21", name: "Murang'a", hasProjects: false },
  { id: "KE-22", name: "Kiambu", hasProjects: false },
  { id: "KE-23", name: "Turkana", hasProjects: false },
  { id: "KE-24", name: "West Pokot", hasProjects: false },
  { id: "KE-25", name: "Samburu", hasProjects: false },
  { id: "KE-26", name: "Trans-Nzoia", hasProjects: false },
  { id: "KE-27", name: "Uasin Gishu", hasProjects: false },
  { id: "KE-28", name: "Elgeyo-Marakwet", hasProjects: false },
  { id: "KE-29", name: "Nandi", hasProjects: false },
  { id: "KE-30", name: "Baringo", hasProjects: false },
  { id: "KE-31", name: "Laikipia", hasProjects: false },
  { id: "KE-32", name: "Nakuru", hasProjects: false },
  { id: "KE-33", name: "Narok", hasProjects: false },
  { id: "KE-34", name: "Kajiado", hasProjects: false },
  { id: "KE-35", name: "Kericho", hasProjects: false },
  { id: "KE-36", name: "Bomet", hasProjects: false },
  { id: "KE-37", name: "Kakamega", hasProjects: false },
  { id: "KE-38", name: "Vihiga", hasProjects: false },
  { id: "KE-39", name: "Bungoma", hasProjects: false },
  { id: "KE-40", name: "Busia", hasProjects: false },
  { id: "KE-41", name: "Siaya", hasProjects: false },
  { id: "KE-42", name: "Kisumu", hasProjects: false },
  { id: "KE-43", name: "Homa Bay", hasProjects: false },
  { id: "KE-44", name: "Migori", hasProjects: false },
  { id: "KE-45", name: "Kisii", hasProjects: false },
  { id: "KE-46", name: "Nyamira", hasProjects: false },
  { id: "KE-47", name: "Nairobi", hasProjects: false },
];

export const mockNotifications: Notification[] = [
  {
    id: "1",
    message: "Your project has been approved",
    date: "2023-09-15",
    read: false,
  },
  {
    id: "2",
    message: "New comment on your project",
    date: "2023-09-14",
    read: true,
  },
  {
    id: "3",
    message: "You have been assigned to a new project",
    date: "2023-09-13",
    read: true,
  },
];

export const mockProjectStats = {
  totalProjects: 2,
  creditsIssued: 12123,
  expectedCredits: 398645,
  totalProjected: 398645,
};
