import { StatusBadge, type StatusBadgeStatus } from "@/shared/components/ui"

import type { MachineState, MachineStatus } from "@/features/machines/types/machine.types"

const machineStatusMap: Record<MachineStatus, StatusBadgeStatus> = {
  active: "active",
  critical: "critical",
  inactive: "inactive",
  warning: "warning",
}

const stateLabelMap: Record<MachineState, string> = {
  idle: "Idle",
  maintenance: "Maintenance",
  running: "Running",
  stopped: "Stopped",
}

export function MachineStatusBadge({ status }: { status: MachineStatus }) {
  return <StatusBadge status={machineStatusMap[status]} />
}

export function MachineStateBadge({ state }: { state: MachineState }) {
  const badgeStatus: StatusBadgeStatus =
    state === "running" ? "active" : state === "stopped" ? "critical" : "pending"

  return <StatusBadge status={badgeStatus}>{stateLabelMap[state]}</StatusBadge>
}
