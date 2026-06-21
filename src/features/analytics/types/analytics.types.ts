export type AnalyticsTrendPoint = {
  label: string
  throughput: number
  downtimeMinutes: number
  efficiency: number
}

export type AnalyticsSummary = {
  productionEfficiency: number
  throughputToday: number
  downtimeMinutes: number
  bottleneckMachine: string
  trend: AnalyticsTrendPoint[]
}
