import {
  Activity,
  AlertTriangle,
  BarChart3,
  Cpu,
  Gauge,
  History,
  LayoutDashboard,
  Network,
  Settings,
  ShieldCheck,
  Tags,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { ROUTE_PATHS } from "@/shared/constants/routes"

export type NavigationItem = {
  label: string
  href: string
  icon: LucideIcon
}

export type NavigationSection = {
  label: string
  items: NavigationItem[]
}

export const navigationSections: NavigationSection[] = [
  {
    label: "Monitoring",
    items: [
      {
        label: "Dashboard",
        href: ROUTE_PATHS.dashboard,
        icon: LayoutDashboard,
      },
      {
        label: "Edge Gateways",
        href: ROUTE_PATHS.edgeGateways,
        icon: Network,
      },
      {
        label: "Machines",
        href: ROUTE_PATHS.machines,
        icon: Cpu,
      },
      {
        label: "Tags",
        href: ROUTE_PATHS.tags,
        icon: Tags,
      },
      {
        label: "Tag Value History",
        href: ROUTE_PATHS.tagValueHistory,
        icon: History,
      },
    ],
  },
  {
    label: "Performance",
    items: [
      {
        label: "OEE Dashboard",
        href: ROUTE_PATHS.oee,
        icon: Gauge,
      },
      {
        label: "Analytics",
        href: ROUTE_PATHS.analytics,
        icon: BarChart3,
      },
      {
        label: "Alerts",
        href: ROUTE_PATHS.alerts,
        icon: AlertTriangle,
      },
      {
        label: "Reports",
        href: ROUTE_PATHS.reports,
        icon: Activity,
      },
    ],
  },
  {
    label: "Administration",
    items: [
      {
        label: "Users",
        href: ROUTE_PATHS.users,
        icon: Users,
      },
      {
        label: "Roles",
        href: ROUTE_PATHS.roles,
        icon: ShieldCheck,
      },
      {
        label: "Settings",
        href: ROUTE_PATHS.settings,
        icon: Settings,
      },
    ],
  },
]
