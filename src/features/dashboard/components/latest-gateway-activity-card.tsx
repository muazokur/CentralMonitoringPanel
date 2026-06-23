import type { LatestGatewayActivity } from "@/features/dashboard/types/dashboard.types"
import { EmptyState } from "@/shared/components/feedback"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

type LatestGatewayActivityCardProps = {
  activities: LatestGatewayActivity[]
  className?: string
}

export function LatestGatewayActivityCard({
  activities,
  className,
}: LatestGatewayActivityCardProps) {
  if (activities.length === 0) {
    return (
      <EmptyState
        className={className}
        description="Gateway activity will appear here once telemetry starts flowing."
        title="No gateway activity"
      />
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Latest EdgeGateway activity</CardTitle>
        <CardDescription>
          Recent telemetry, heartbeat and connectivity events.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity) => (
          <article className="rounded-md border bg-surface p-3" key={activity.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {activity.gatewayName}
                </p>
                <p className="text-xs font-medium uppercase text-muted-foreground">
                  {activity.event}
                </p>
              </div>
              <StatusBadge status={activity.status} />
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {activity.message}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
              <span>{new Date(activity.timestamp).toLocaleString()}</span>
              <span aria-hidden="true">/</span>
              <span>{activity.dataPoints.toLocaleString()} values</span>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  )
}
