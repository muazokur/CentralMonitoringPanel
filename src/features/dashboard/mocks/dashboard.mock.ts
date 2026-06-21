import type { DashboardOverview } from "@/features/dashboard/types/dashboard.types"

export const dashboardOverviewMock: DashboardOverview = {
  activeMachines: 42,
  offlineMachines: 3,
  activeAlerts: 7,
  averageOee: 84.6,
  dataReceivedToday: 128_450,
  gatewayHealth: {
    online: 12,
    degraded: 2,
    offline: 1,
  },
  recentAlerts: [
    {
      id: "alert-1001",
      severity: "critical",
      machine: "Packaging Line 01",
      message: "Emergency stop circuit active",
      createdAt: "2026-06-21T10:22:00Z",
      status: "pending",
    },
    {
      id: "alert-1002",
      severity: "warning",
      machine: "Mixer MX-04",
      message: "Motor temperature above warning threshold",
      createdAt: "2026-06-21T09:48:00Z",
      status: "pending",
    },
    {
      id: "alert-1003",
      severity: "warning",
      machine: "Filling Station 02",
      message: "Tag quality degraded for flow sensor",
      createdAt: "2026-06-21T08:31:00Z",
      status: "resolved",
    },
  ],
  oeeTrend: [
    { timestamp: "06:00", oee: 78, availability: 86, performance: 82, quality: 96 },
    { timestamp: "08:00", oee: 81, availability: 88, performance: 86, quality: 97 },
    { timestamp: "10:00", oee: 85, availability: 91, performance: 88, quality: 98 },
    { timestamp: "12:00", oee: 83, availability: 89, performance: 87, quality: 97 },
    { timestamp: "14:00", oee: 86, availability: 92, performance: 89, quality: 98 },
  ],
  machineStatusDistribution: [
    { status: "running", count: 42 },
    { status: "idle", count: 8 },
    { status: "offline", count: 3 },
    { status: "maintenance", count: 4 },
  ],
}
