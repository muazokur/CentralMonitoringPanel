import type { Alert } from "@/features/alerts/types/alert.types"

export const alertsMock: Alert[] = [
  {
    id: "alert-press-load",
    severity: "warning",
    machine: "Hydraulic Press 101",
    tag: "PRS101.LOAD",
    message: "Press load exceeded warning threshold.",
    status: "active",
    createdAt: "2026-06-21T09:21:04.000Z",
  },
  {
    id: "alert-pack-stop",
    severity: "critical",
    machine: "Packaging Cell 22",
    tag: "PKG022.ALARM",
    message: "Packaging conveyor safety alarm is active.",
    status: "pending",
    createdAt: "2026-06-21T08:58:12.000Z",
  },
  {
    id: "alert-cnc-quality",
    severity: "warning",
    machine: "CNC Milling 204",
    tag: "CNC204.SPD",
    message: "Spindle speed variance returned to normal.",
    status: "resolved",
    createdAt: "2026-06-21T07:44:30.000Z",
    resolvedAt: "2026-06-21T08:09:18.000Z",
  },
]
