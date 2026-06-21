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
}
