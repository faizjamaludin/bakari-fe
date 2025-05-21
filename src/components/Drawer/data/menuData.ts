import {
  Laptop,
  ChartPie,
  Box,
  Users,
  SlidersHorizontal,
  Activity,
} from "lucide-react";

export const menuData = [
  {
    name: "Point of Sales",
    icon: Laptop,
    path: "/",
  },
  {
    name: "Activity",
    icon: Activity,
    path: "/activity/billing-queue",
  },
  {
    name: "Report",
    icon: ChartPie,
    path: "/",
  },
  {
    name: "Inventory",
    icon: Box,
    path: "/",
  },
  {
    name: "Teams",
    icon: Users,
    path: "/",
  },
  {
    name: "Settings",
    icon: SlidersHorizontal,
    path: "/",
  },
];
