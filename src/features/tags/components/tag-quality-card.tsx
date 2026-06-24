import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

import type { TagDetail } from "@/features/tags/types/tag.types"

type TagQualityCardProps = {
  tag: TagDetail
}

export function TagQualityCard({ tag }: TagQualityCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quality information</CardTitle>
        <CardDescription>
          Recent signal quality distribution for this tag.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between gap-3 rounded-md border bg-muted/30 p-3">
          <StatusBadge status="active">good</StatusBadge>
          <span className="text-sm font-semibold text-foreground">
            {tag.qualitySummary.goodCount}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-md border bg-muted/30 p-3">
          <StatusBadge status="warning">uncertain</StatusBadge>
          <span className="text-sm font-semibold text-foreground">
            {tag.qualitySummary.uncertainCount}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-md border bg-muted/30 p-3">
          <StatusBadge status="critical">bad</StatusBadge>
          <span className="text-sm font-semibold text-foreground">
            {tag.qualitySummary.badCount}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Last checked {new Date(tag.qualitySummary.lastCheckedAt).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  )
}
