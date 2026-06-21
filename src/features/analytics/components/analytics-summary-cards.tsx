import { BarChart3, Clock3, Gauge, TrendingUp } from "lucide-react"

import { MetricCard } from "@/shared/components/charts"

import type { AnalyticsSummary } from "@/features/analytics/types/analytics.types"

type AnalyticsSummaryCardsProps = {
  summary: AnalyticsSummary
}

export function AnalyticsSummaryCards({ summary }: AnalyticsSummaryCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        icon={Gauge}
        title="Efficiency"
        value={`${summary.productionEfficiency.toFixed(1)}%`}
      />
      <MetricCard
        icon={TrendingUp}
        title="Throughput today"
        value={summary.throughputToday.toLocaleString()}
      />
      <MetricCard
        icon={Clock3}
        title="Downtime"
        value={`${summary.downtimeMinutes} min`}
      />
      <MetricCard
        icon={BarChart3}
        title="Bottleneck"
        value={summary.bottleneckMachine}
      />
    </div>
  )
}
