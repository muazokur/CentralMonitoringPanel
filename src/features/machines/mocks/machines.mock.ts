import type { Machine } from "@/features/machines/types/machine.types"

export const machinesMock: Machine[] = [
  {
    id: "mach-press-101",
    name: "Hydraulic Press 101",
    code: "PRS-101",
    status: "active",
    gateway: "Press Shop Gateway 02",
    currentState: "running",
    oee: 84.6,
    lastUpdate: "2026-06-21T09:41:16.000Z",
  },
  {
    id: "mach-cnc-204",
    name: "CNC Milling 204",
    code: "CNC-204",
    status: "warning",
    gateway: "Istanbul Paint Line Gateway",
    currentState: "idle",
    oee: 69.8,
    lastUpdate: "2026-06-21T09:39:51.000Z",
  },
  {
    id: "mach-pack-022",
    name: "Packaging Cell 22",
    code: "PKG-022",
    status: "critical",
    gateway: "Packaging Gateway 03",
    currentState: "stopped",
    oee: 41.2,
    lastUpdate: "2026-06-21T08:58:02.000Z",
  },
]
