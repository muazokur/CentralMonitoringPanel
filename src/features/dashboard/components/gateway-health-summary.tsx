import type { GatewayHealth } from "@/features/dashboard/types/dashboard.types"
import { Card, CardContent, CardHeader, CardTitle, StatusBadge } from "@/shared/components/ui"

type GatewayHealthSummaryProps = {
  health: GatewayHealth
}

export function GatewayHealthSummary({ health }: GatewayHealthSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gateway Health</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-3">
        <StatusBadge status="online">Online: {health.online}</StatusBadge>
        <StatusBadge status="warning">Degraded: {health.degraded}</StatusBadge>
        <StatusBadge status="offline">Offline: {health.offline}</StatusBadge>
      </CardContent>
    </Card>
  )
}
