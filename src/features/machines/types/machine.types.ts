export type MachineStatus = "active" | "inactive" | "warning" | "critical"
export type MachineState = "running" | "idle" | "stopped" | "maintenance"

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

export type MachineFormValues = {
  name: string
  code: string
  gatewayId: string
  status: MachineStatus
}
