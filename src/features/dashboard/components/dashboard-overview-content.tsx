import { DashboardMetricCards } from "@/features/dashboard/components/dashboard-metric-cards"
import { GatewayHealthCard } from "@/features/dashboard/components/gateway-health-card"
import { LatestGatewayActivityCard } from "@/features/dashboard/components/latest-gateway-activity-card"
import { MachineStatusChart } from "@/features/dashboard/components/machine-status-chart"
import { OeeTrendChart } from "@/features/dashboard/components/oee-trend-chart"
import { RecentAlertsCard } from "@/features/dashboard/components/recent-alerts-card"
import { SystemHealthSummary } from "@/features/dashboard/components/system-health-summary"
import type { DashboardOverview } from "@/features/dashboard/types/dashboard.types"

type DashboardOverviewContentProps = {
  overview: DashboardOverview
}

export function DashboardOverviewContent({
  overview,
}: DashboardOverviewContentProps) {
  return (
    <>
      <DashboardMetricCards overview={overview} />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]">
        <OeeTrendChart data={overview.oeeTrend} />
        <MachineStatusChart data={overview.machineStatusDistribution} />
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <GatewayHealthCard health={overview.gatewayHealth} />
        <SystemHealthSummary signals={overview.systemHealthSummary} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <LatestGatewayActivityCard activities={overview.latestGatewayActivity} />
        <RecentAlertsCard alerts={overview.recentAlerts} />
      </div>
    </>
  )
}
