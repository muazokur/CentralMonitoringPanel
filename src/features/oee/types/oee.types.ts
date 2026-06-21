export type OeePoint = {
  label: string
  availability: number
  performance: number
  quality: number
  oee: number
}

export type MachineOee = {
  machineId: string
  machine: string
  availability: number
  performance: number
  quality: number
  oee: number
}

export type ShiftOee = {
  shift: string
  oee: number
  target: number
}

export type DateRangeComparison = {
  currentOee: number
  previousOee: number
  delta: number
}

export type OeeSummary = {
  availability: number
  performance: number
  quality: number
  oee: number
  machineBasedOee: MachineOee[]
  shiftBasedOee: ShiftOee[]
  dateRangeComparison: DateRangeComparison
  trend: OeePoint[]
}
