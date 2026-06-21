import { Activity, Gauge, ShieldCheck, Timer } from "lucide-react"

import { MetricCard } from "@/shared/components/charts"

import type { OeeSummary } from "@/features/oee/types/oee.types"

type OeeSummaryCardsProps = {
  summary: OeeSummary
}

export function OeeSummaryCards({ summary }: OeeSummaryCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard icon={Gauge} title="OEE" value={`${summary.oee.toFixed(1)}%`} />
      <MetricCard
        icon={Timer}
        title="Availability"
        value={`${summary.availability.toFixed(1)}%`}
      />
      <MetricCard
        icon={Activity}
        title="Performance"
        value={`${summary.performance.toFixed(1)}%`}
      />
      <MetricCard
        icon={ShieldCheck}
        title="Quality"
        value={`${summary.quality.toFixed(1)}%`}
      />
    </div>
  )
}
