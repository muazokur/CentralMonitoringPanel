import type { SystemHealthSignal } from "@/features/dashboard/types/dashboard.types"
import { EmptyState } from "@/shared/components/feedback"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

type SystemHealthSummaryProps = {
  signals: SystemHealthSignal[]
  className?: string
}

export function SystemHealthSummary({
  signals,
  className,
}: SystemHealthSummaryProps) {
  if (signals.length === 0) {
    return (
      <EmptyState
        className={className}
        description="System health signals will appear once services report status."
        title="No system health data"
      />
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>System health summary</CardTitle>
        <CardDescription>
          Core platform services used by monitoring and analytics.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        {signals.map((signal) => (
          <div className="rounded-md border bg-surface p-3" key={signal.id}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                {signal.label}
              </p>
              <StatusBadge status={signal.status} withDot={false} />
            </div>
            <p className="mt-3 text-base font-semibold text-foreground">
              {signal.value}
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {signal.helperText}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
