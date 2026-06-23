import type { DashboardRecentAlert } from "@/features/dashboard/types/dashboard.types"
import { EmptyState } from "@/shared/components/feedback"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

type RecentAlertsCardProps = {
  alerts: DashboardRecentAlert[]
  className?: string
}

export function RecentAlertsCard({ alerts, className }: RecentAlertsCardProps) {
  if (alerts.length === 0) {
    return (
      <EmptyState
        className={className}
        description="No warning or critical events have been reported recently."
        title="No recent alerts"
      />
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent alerts</CardTitle>
        <CardDescription>
          Latest warning and critical events from monitored machines.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <article className="rounded-md border bg-surface p-3" key={alert.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {alert.machine}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {alert.message}
                </p>
              </div>
              <StatusBadge
                status={alert.severity === "critical" ? "critical" : "warning"}
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
              <span>{new Date(alert.createdAt).toLocaleString()}</span>
              <span aria-hidden="true">/</span>
              <StatusBadge status={alert.status} withDot={false} />
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  )
}
