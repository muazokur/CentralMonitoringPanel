import type { PlcTag } from "@/features/tags/types/tag.types"

export const tagsMock: PlcTag[] = [
  {
    id: "tag-press-load",
    name: "Press Load",
    code: "PRS101.LOAD",
    dataType: "float",
    unit: "kN",
    machine: "Hydraulic Press 101",
    gateway: "Press Shop Gateway 02",
    isActive: true,
  },
  {
    id: "tag-cnc-spindle",
    name: "Spindle Speed",
    code: "CNC204.SPD",
    dataType: "integer",
    unit: "rpm",
    machine: "CNC Milling 204",
    gateway: "Istanbul Paint Line Gateway",
    isActive: true,
  },
  {
    id: "tag-pack-alarm",
    name: "Conveyor Alarm",
    code: "PKG022.ALARM",
    dataType: "boolean",
    unit: "",
    machine: "Packaging Cell 22",
    gateway: "Packaging Gateway 03",
    isActive: false,
  },
]
