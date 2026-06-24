export type AnalyticsTrendPoint = {
  label: string
  throughput: number
  downtimeMinutes: number
  efficiency: number
}

export type DowntimeSummaryItem = {
  reason: string
  minutes: number
}

export type ProductionPerformancePoint = {
  label: string
  planned: number
  actual: number
}

export type MachineComparisonItem = {
  machine: string
  efficiency: number
  throughput: number
  downtimeMinutes: number
}

export type AnalyticsSummary = {
  productionEfficiency: number
  throughputToday: number
  downtimeMinutes: number
  bottleneckMachine: string
  trend: AnalyticsTrendPoint[]
  downtimeSummary: DowntimeSummaryItem[]
  productionPerformance: ProductionPerformancePoint[]
  machineComparison: MachineComparisonItem[]
}
