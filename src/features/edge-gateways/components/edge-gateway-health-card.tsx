import type { StatusBadgeStatus } from "@/shared/components/ui"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

import type {
  EdgeGatewayDetail,
  EdgeGatewayHealthStatus,
} from "@/features/edge-gateways/types/edge-gateway.types"

const healthStatusMap: Record<EdgeGatewayHealthStatus, StatusBadgeStatus> = {
  degraded: "warning",
  healthy: "online",
  offline: "offline",
}

type EdgeGatewayHealthCardProps = {
  gateway: EdgeGatewayDetail
}

export function EdgeGatewayHealthCard({ gateway }: EdgeGatewayHealthCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health status</CardTitle>
        <CardDescription>
          Gateway connectivity, heartbeat and ingestion freshness.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <HealthItem
          label="Status"
          value={gateway.healthStatus}
          badgeStatus={healthStatusMap[gateway.healthStatus]}
        />
        <HealthItem label="IP address" value={gateway.ipAddress} />
        <HealthItem label="Firmware" value={gateway.firmwareVersion} />
        <HealthItem label="Location" value={gateway.location} />
      </CardContent>
    </Card>
  )
}

type HealthItemProps = {
  label: string
  value: string
  badgeStatus?: StatusBadgeStatus
}

function HealthItem({ label, value, badgeStatus }: HealthItemProps) {
  return (
    <div className="rounded-md border bg-surface p-3">
      <p className="text-xs font-medium uppercase text-muted-foreground">
        {label}
      </p>
      <div className="mt-2">
        {badgeStatus ? (
          <StatusBadge status={badgeStatus}>{value}</StatusBadge>
        ) : (
          <p className="text-sm font-medium text-foreground">{value}</p>
        )}
      </div>
    </div>
  )
}
