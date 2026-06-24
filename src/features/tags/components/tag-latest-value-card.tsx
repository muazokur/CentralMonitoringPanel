import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
  type StatusBadgeStatus,
} from "@/shared/components/ui"

import type { TagDetail, TagValueQuality } from "@/features/tags/types/tag.types"

const qualityStatusMap: Record<TagValueQuality, StatusBadgeStatus> = {
  bad: "critical",
  good: "active",
  uncertain: "warning",
}

type TagLatestValueCardProps = {
  tag: TagDetail
}

export function TagLatestValueCard({ tag }: TagLatestValueCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest value</CardTitle>
        <CardDescription>Most recent value captured from the PLC tag.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-3xl font-semibold tracking-normal text-foreground">
              {tag.latestValue.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {new Date(tag.latestValue.timestamp).toLocaleString()}
            </p>
          </div>
          <StatusBadge status={qualityStatusMap[tag.latestValue.quality]}>
            {tag.latestValue.quality}
          </StatusBadge>
        </div>
      </CardContent>
    </Card>
  )
}
