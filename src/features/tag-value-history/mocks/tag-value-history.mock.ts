import type { TagValueHistoryItem } from "@/features/tag-value-history/types/tag-value-history.types"

export const tagValueHistoryMock: TagValueHistoryItem[] = [
  {
    id: "hist-001",
    tag: "PRS101.LOAD",
    machine: "Hydraulic Press 101",
    gateway: "Press Shop Gateway 02",
    value: "184.4 kN",
    quality: "good",
    timestamp: "2026-06-21T09:42:01.000Z",
  },
  {
    id: "hist-002",
    tag: "CNC204.SPD",
    machine: "CNC Milling 204",
    gateway: "Istanbul Paint Line Gateway",
    value: "9,840 rpm",
    quality: "uncertain",
    timestamp: "2026-06-21T09:41:55.000Z",
  },
  {
    id: "hist-003",
    tag: "PKG022.ALARM",
    machine: "Packaging Cell 22",
    gateway: "Packaging Gateway 03",
    value: "true",
    quality: "bad",
    timestamp: "2026-06-21T08:58:02.000Z",
  },
]
