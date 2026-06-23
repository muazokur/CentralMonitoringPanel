export type EdgeGatewayStatus = "online" | "offline" | "warning"

export type DataReceiveStatus = "receiving" | "delayed" | "stopped"

export type EdgeGatewayHealthStatus = "healthy" | "degraded" | "offline"

export type EdgeGatewayTagValueQuality = "good" | "uncertain" | "bad"

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

export type EdgeGatewayConnectedMachine = {
  id: string
  name: string
  code: string
  status: "active" | "inactive" | "warning" | "critical"
  currentState: "running" | "idle" | "stopped" | "maintenance"
  oee: number
  lastUpdate: string
}

export type EdgeGatewayRecentTagValue = {
  id: string
  tag: string
  machine: string
  value: string
  quality: EdgeGatewayTagValueQuality
  timestamp: string
}

export type EdgeGatewayAlert = {
  id: string
  severity: "warning" | "critical"
  machine: string
  message: string
  status: "pending" | "resolved"
  createdAt: string
}

export type EdgeGatewayDetail = EdgeGateway & {
  healthScore: number
  healthStatus: EdgeGatewayHealthStatus
  lastDataReceivedAt: string
  connectedMachines: EdgeGatewayConnectedMachine[]
  recentTagValues: EdgeGatewayRecentTagValue[]
  alerts: EdgeGatewayAlert[]
}

export type EdgeGatewayFormValues = {
  name: string
  ipAddress: string
  location: string
  firmwareVersion: string
}
