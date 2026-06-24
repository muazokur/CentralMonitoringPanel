import type { GatewayHealth } from "@/features/dashboard/types/dashboard.types"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ProgressBar,
  StatusBadge,
} from "@/shared/components/ui"

type GatewayHealthCardProps = {
  health: GatewayHealth
  className?: string
}

export function GatewayHealthCard({ health, className }: GatewayHealthCardProps) {
  const total = health.online + health.degraded + health.offline

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Gateway health</CardTitle>
        <CardDescription>
          EdgeGateway availability across active production areas.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <GatewayHealthItem
            label="Online"
            status="online"
            total={total}
            value={health.online}
          />
          <GatewayHealthItem
            label="Degraded"
            status="warning"
            total={total}
            value={health.degraded}
          />
          <GatewayHealthItem
            label="Offline"
            status="offline"
            total={total}
            value={health.offline}
          />
        </div>
      </CardContent>
    </Card>
  )
}

type GatewayHealthItemProps = {
  label: string
  value: number
  total: number
  status: "online" | "warning" | "offline"
}

const progressToneMap = {
  offline: "neutral",
  online: "success",
  warning: "warning",
} as const

function GatewayHealthItem({
  label,
  value,
  total,
  status,
}: GatewayHealthItemProps) {
  const percent = total > 0 ? Math.round((value / total) * 100) : 0

  return (
    <div className="rounded-md border bg-surface p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-medium uppercase text-muted-foreground">
          {label}
        </p>
        <StatusBadge status={status} withDot={false}>
          {percent}%
        </StatusBadge>
      </div>
      <p className="mt-3 text-2xl font-semibold text-foreground">{value}</p>
      <ProgressBar
        className="mt-3"
        label={`${label} gateway share`}
        tone={progressToneMap[status]}
        value={percent}
      />
    </div>
  )
}
