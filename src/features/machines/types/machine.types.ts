export type MachineStatus = "active" | "inactive" | "warning" | "critical"
export type MachineState = "running" | "idle" | "stopped" | "maintenance"
export type MachineTagValueQuality = "good" | "uncertain" | "bad"

export type Machine = {
  id: string
  name: string
  code: string
  status: MachineStatus
  gateway: string
  currentState: MachineState
  oee: number
  lastUpdate: string
}

export type MachineConnectedTag = {
  id: string
  name: string
  code: string
  dataType: "boolean" | "integer" | "float" | "string"
  unit: string
  isActive: boolean
}

export type MachineLatestTagValue = {
  id: string
  tag: string
  value: string
  quality: MachineTagValueQuality
  timestamp: string
}

export type MachineOeeSummary = {
  availability: number
  performance: number
  quality: number
  oee: number
}

export type MachineAlert = {
  id: string
  severity: "warning" | "critical"
  tag: string
  message: string
  status: "pending" | "resolved"
  createdAt: string
}

export type MachineHistoryItem = {
  id: string
  timestamp: string
  state: MachineState
  event: string
  oee: number
  durationMinutes: number
}

export type MachineDetail = Machine & {
  connectedTags: MachineConnectedTag[]
  latestTagValues: MachineLatestTagValue[]
  oeeSummary: MachineOeeSummary
  alerts: MachineAlert[]
  history: MachineHistoryItem[]
}

export type MachineFormValues = {
  name: string
  code: string
  gatewayId: string
  status: MachineStatus
}
