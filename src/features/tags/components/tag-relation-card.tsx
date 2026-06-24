import { Cpu, Network, Tag } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

import type { TagDetail } from "@/features/tags/types/tag.types"

type TagRelationCardProps = {
  tag: TagDetail
}

export function TagRelationCard({ tag }: TagRelationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Machine and gateway relation</CardTitle>
        <CardDescription>
          PLC tag ownership and source gateway mapping.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border bg-muted/30 p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Tag aria-hidden="true" className="size-4" />
              Tag code
            </div>
            <p className="text-sm font-semibold text-foreground">{tag.code}</p>
          </div>
          <div className="rounded-md border bg-muted/30 p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Cpu aria-hidden="true" className="size-4" />
              Machine
            </div>
            <p className="text-sm font-semibold text-foreground">
              {tag.machine}
            </p>
          </div>
          <div className="rounded-md border bg-muted/30 p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Network aria-hidden="true" className="size-4" />
              Gateway
            </div>
            <p className="text-sm font-semibold text-foreground">
              {tag.gateway}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={tag.isActive ? "active" : "inactive"} />
          <StatusBadge tone="info" withDot={false}>
            {tag.dataType}
          </StatusBadge>
        </div>
      </CardContent>
    </Card>
  )
}
