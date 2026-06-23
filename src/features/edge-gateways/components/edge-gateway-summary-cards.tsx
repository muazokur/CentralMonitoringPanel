import { Activity, Clock3, Cpu, Network } from "lucide-react"

import { MetricCard } from "@/shared/components/charts"

import type { EdgeGatewayDetail } from "@/features/edge-gateways/types/edge-gateway.types"

type EdgeGatewaySummaryCardsProps = {
  gateway: EdgeGatewayDetail
}

export function EdgeGatewaySummaryCards({
  gateway,
}: EdgeGatewaySummaryCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        icon={Activity}
        title="Health score"
        tone={gateway.healthScore >= 80 ? "success" : "warning"}
        value={`${gateway.healthScore}%`}
      />
      <MetricCard
        icon={Cpu}
        title="Connected machines"
        value={gateway.connectedMachineCount}
      />
      <MetricCard
        icon={Network}
        title="Data receive"
        tone={gateway.dataReceiveStatus === "receiving" ? "success" : "warning"}
        value={gateway.dataReceiveStatus}
      />
      <MetricCard
        icon={Clock3}
        title="Last data"
        value={new Date(gateway.lastDataReceivedAt).toLocaleTimeString()}
      />
    </div>
  )
}
