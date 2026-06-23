import { Activity, Clock3, Cpu, Gauge } from "lucide-react"

import { MetricCard } from "@/shared/components/charts"

import type { MachineDetail } from "@/features/machines/types/machine.types"

type MachineDetailSummaryCardsProps = {
  machine: MachineDetail
}

export function MachineDetailSummaryCards({
  machine,
}: MachineDetailSummaryCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard icon={Cpu} title="Current state" value={machine.currentState} />
      <MetricCard
        icon={Gauge}
        title="Current OEE"
        tone={machine.oee >= 75 ? "success" : "warning"}
        value={`${machine.oee.toFixed(1)}%`}
      />
      <MetricCard
        icon={Activity}
        title="Connected tags"
        value={machine.connectedTags.length}
      />
      <MetricCard
        icon={Clock3}
        title="Last update"
        value={new Date(machine.lastUpdate).toLocaleTimeString()}
      />
    </div>
  )
}
