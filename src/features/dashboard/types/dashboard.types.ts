import type { StatusBadgeStatus } from "@/shared/components/ui"

export type DashboardMetric = {
  id: string
  label: string
  value: string | number
  helperText?: string
  trend?: string
  status?: StatusBadgeStatus
}

export type GatewayHealth = {
  online: number
  degraded: number
  offline: number
}

export type DashboardRecentAlert = {
  id: string
  severity: "warning" | "critical"
  machine: string
  message: string
  createdAt: string
  status: "pending" | "resolved"
}

export type OeeTrendPoint = {
  timestamp: string
  oee: number
  availability: number
  performance: number
  quality: number
}

export type MachineStatusDistribution = {
  status: "running" | "idle" | "offline" | "maintenance"
  count: number
}

export type LatestGatewayActivity = {
  id: string
  gatewayName: string
  status: "online" | "warning" | "offline"
  event: string
  message: string
  timestamp: string
  dataPoints: number
}

export type SystemHealthSignal = {
  id: string
  label: string
  value: string
  helperText: string
  status: StatusBadgeStatus
}

export type DashboardOverview = {
  activeMachines: number
  offlineMachines: number
  activeAlerts: number
  averageOee: number
  dataReceivedToday: number
  gatewayHealth: GatewayHealth
  recentAlerts: DashboardRecentAlert[]
  oeeTrend: OeeTrendPoint[]
  machineStatusDistribution: MachineStatusDistribution[]
  latestGatewayActivity: LatestGatewayActivity[]
  systemHealthSummary: SystemHealthSignal[]
}
