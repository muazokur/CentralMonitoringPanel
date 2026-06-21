import type { LucideIcon } from "lucide-react"

import type { StatusTone } from "@/shared/constants"
import { Card, CardContent, StatusBadge } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

type MetricCardProps = {
  title: string
  value: string | number
  description?: string
  trend?: string
  tone?: StatusTone
  icon?: LucideIcon
  className?: string
}

export function MetricCard({
  title,
  value,
  description,
  trend,
  tone = "neutral",
  icon: Icon,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-2">
            <p className="truncate text-sm font-medium text-muted-foreground">
              {title}
            </p>
            <div className="flex flex-wrap items-end gap-2">
              <p className="text-2xl font-semibold tracking-normal text-foreground">
                {value}
              </p>
              {trend ? <StatusBadge tone={tone}>{trend}</StatusBadge> : null}
            </div>
          </div>
          {Icon ? (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </div>
          ) : null}
        </div>
        {description ? (
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </CardContent>
    </Card>
  )
}
