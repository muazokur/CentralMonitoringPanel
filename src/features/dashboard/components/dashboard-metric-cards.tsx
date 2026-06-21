import { Activity, AlertTriangle, Gauge, Network, RadioTower } from "lucide-react"

import type { DashboardOverview } from "@/features/dashboard/types/dashboard.types"
import { MetricCard } from "@/shared/components/charts"

type DashboardMetricCardsProps = {
  overview: DashboardOverview
}

export function DashboardMetricCards({ overview }: DashboardMetricCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      <MetricCard
        icon={Activity}
        title="Active Machines"
        tone="success"
        trend="Online"
        value={overview.activeMachines}
      />
      <MetricCard
        icon={RadioTower}
        title="Offline Machines"
        tone={overview.offlineMachines > 0 ? "warning" : "success"}
        trend="Needs review"
        value={overview.offlineMachines}
      />
      <MetricCard
        icon={AlertTriangle}
        title="Active Alerts"
        tone={overview.activeAlerts > 0 ? "danger" : "success"}
        trend="Live"
        value={overview.activeAlerts}
      />
      <MetricCard
        icon={Gauge}
        title="Average OEE"
        tone="info"
        trend={`${overview.averageOee}%`}
        value={`${overview.averageOee}%`}
      />
      <MetricCard
        icon={Network}
        title="Data Today"
        tone="neutral"
        trend="Telemetry"
        value={overview.dataReceivedToday.toLocaleString()}
      />
    </div>
  )
}
