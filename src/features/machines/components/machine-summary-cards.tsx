import { Activity, AlertTriangle, PauseCircle, Power } from "lucide-react"

import { MetricCard } from "@/shared/components/charts"

import type { Machine } from "@/features/machines/types/machine.types"

type MachineSummaryCardsProps = {
  machines: Machine[]
}

export function MachineSummaryCards({ machines }: MachineSummaryCardsProps) {
  const active = machines.filter((machine) => machine.status === "active").length
  const warnings = machines.filter((machine) => machine.status === "warning").length
  const critical = machines.filter((machine) => machine.status === "critical").length
  const idle = machines.filter((machine) => machine.currentState === "idle").length

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <MetricCard icon={Power} title="Active machines" value={active} />
      <MetricCard icon={PauseCircle} title="Idle machines" value={idle} />
      <MetricCard icon={Activity} title="Warnings" value={warnings} />
      <MetricCard icon={AlertTriangle} title="Critical" value={critical} />
    </div>
  )
}
