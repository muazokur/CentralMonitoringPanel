import { Activity, CheckCircle2, Gauge, RadioTower } from "lucide-react"

import { MetricCard } from "@/shared/components/charts"

import type { TagDetail } from "@/features/tags/types/tag.types"

type TagSummaryCardsProps = {
  tag: TagDetail
}

export function TagSummaryCards({ tag }: TagSummaryCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard icon={Activity} title="Data type" value={tag.dataType} />
      <MetricCard icon={Gauge} title="Unit" value={tag.unit || "-"} />
      <MetricCard
        icon={CheckCircle2}
        title="Active status"
        tone={tag.isActive ? "success" : "neutral"}
        value={tag.isActive ? "Active" : "Inactive"}
      />
      <MetricCard
        icon={RadioTower}
        title="Latest quality"
        tone={
          tag.qualitySummary.latestQuality === "bad"
            ? "danger"
            : tag.qualitySummary.latestQuality === "uncertain"
              ? "warning"
              : "success"
        }
        value={tag.qualitySummary.latestQuality}
      />
    </div>
  )
}
