import type { AnalyticsSummary } from "@/features/analytics/types/analytics.types"

export const analyticsSummaryMock: AnalyticsSummary = {
  bottleneckMachine: "Packaging Cell 22",
  downtimeMinutes: 184,
  productionEfficiency: 82.4,
  throughputToday: 12840,
  trend: [
    { label: "06:00", throughput: 1320, downtimeMinutes: 8, efficiency: 83 },
    { label: "08:00", throughput: 2840, downtimeMinutes: 18, efficiency: 85 },
    { label: "10:00", throughput: 4580, downtimeMinutes: 42, efficiency: 80 },
    { label: "12:00", throughput: 7130, downtimeMinutes: 71, efficiency: 82 },
    { label: "14:00", throughput: 10120, downtimeMinutes: 103, efficiency: 84 },
  ],
  downtimeSummary: [
    { reason: "Material wait", minutes: 54 },
    { reason: "Tooling", minutes: 38 },
    { reason: "Quality hold", minutes: 31 },
    { reason: "Maintenance", minutes: 61 },
  ],
  productionPerformance: [
    { label: "Shift A", actual: 4380, planned: 4600 },
    { label: "Shift B", actual: 4120, planned: 4500 },
    { label: "Shift C", actual: 3340, planned: 3900 },
  ],
  machineComparison: [
    {
      downtimeMinutes: 28,
      efficiency: 88.6,
      machine: "Hydraulic Press 101",
      throughput: 4820,
    },
    {
      downtimeMinutes: 47,
      efficiency: 79.8,
      machine: "CNC Milling 204",
      throughput: 3920,
    },
    {
      downtimeMinutes: 109,
      efficiency: 61.4,
      machine: "Packaging Cell 22",
      throughput: 2660,
    },
  ],
}
