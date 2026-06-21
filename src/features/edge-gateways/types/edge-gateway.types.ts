export type EdgeGatewayStatus = "online" | "offline" | "warning"

export type DataReceiveStatus = "receiving" | "delayed" | "stopped"

export type EdgeGateway = {
  id: string
  name: string
  status: EdgeGatewayStatus
  lastHeartbeat: string
  ipAddress: string
  connectedMachineCount: number
  dataReceiveStatus: DataReceiveStatus
  firmwareVersion: string
  location: string
}

export type EdgeGatewayFormValues = {
  name: string
  ipAddress: string
  location: string
  firmwareVersion: string
}
