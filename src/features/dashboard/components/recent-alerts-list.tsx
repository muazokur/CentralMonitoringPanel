import type { DashboardRecentAlert } from "@/features/dashboard/types/dashboard.types"
import { Card, CardContent, CardHeader, CardTitle, StatusBadge } from "@/shared/components/ui"

type RecentAlertsListProps = {
  alerts: DashboardRecentAlert[]
}

export function RecentAlertsList({ alerts }: RecentAlertsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div className="rounded-md border bg-surface p-3" key={alert.id}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium text-foreground">{alert.machine}</p>
              <StatusBadge status={alert.severity === "critical" ? "critical" : "warning"} />
            </div>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {alert.message}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
