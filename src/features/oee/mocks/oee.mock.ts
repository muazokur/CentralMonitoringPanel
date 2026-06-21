import type { OeeSummary } from "@/features/oee/types/oee.types"

export const oeeSummaryMock: OeeSummary = {
  availability: 88.4,
  performance: 81.7,
  quality: 96.3,
  oee: 69.6,
  dateRangeComparison: {
    currentOee: 69.6,
    delta: 3.4,
    previousOee: 66.2,
  },
  machineBasedOee: [
    {
      machineId: "mach-press-101",
      machine: "Hydraulic Press 101",
      availability: 91.4,
      performance: 88.1,
      quality: 98.7,
      oee: 79.5,
    },
    {
      machineId: "mach-cnc-204",
      machine: "CNC Milling 204",
      availability: 83.3,
      performance: 78.4,
      quality: 95.8,
      oee: 62.6,
    },
  ],
  shiftBasedOee: [
    { shift: "Shift A", oee: 72.3, target: 75 },
    { shift: "Shift B", oee: 68.9, target: 75 },
    { shift: "Shift C", oee: 64.2, target: 75 },
  ],
  trend: [
    { label: "Mon", availability: 87, performance: 80, quality: 96, oee: 66.8 },
    { label: "Tue", availability: 89, performance: 82, quality: 97, oee: 70.8 },
    { label: "Wed", availability: 86, performance: 81, quality: 95, oee: 66.2 },
    { label: "Thu", availability: 90, performance: 83, quality: 96, oee: 71.7 },
    { label: "Fri", availability: 88, performance: 82, quality: 97, oee: 70.0 },
  ],
}
