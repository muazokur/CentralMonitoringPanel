import { Activity, Gauge, ShieldCheck, Timer } from "lucide-react"

import { MetricCard } from "@/shared/components/charts"

import type { MachineOeeSummary } from "@/features/machines/types/machine.types"

type MachineOeeCardsProps = {
  oee: MachineOeeSummary
}

export function MachineOeeCards({ oee }: MachineOeeCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard icon={Gauge} title="OEE" value={`${oee.oee.toFixed(1)}%`} />
      <MetricCard
        icon={Timer}
        title="Availability"
        value={`${oee.availability.toFixed(1)}%`}
      />
      <MetricCard
        icon={Activity}
        title="Performance"
        value={`${oee.performance.toFixed(1)}%`}
      />
      <MetricCard
        icon={ShieldCheck}
        title="Quality"
        value={`${oee.quality.toFixed(1)}%`}
      />
    </div>
  )
}
