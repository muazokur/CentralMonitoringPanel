export type AlertSeverity = "warning" | "critical"
export type AlertStatus = "active" | "resolved" | "pending"

export type Alert = {
  id: string
  severity: AlertSeverity
  machine: string
  tag: string
  message: string
  status: AlertStatus
  createdAt: string
  resolvedAt?: string
}

export type AlertFormValues = {
  severity: AlertSeverity
  machineId: string
  tagId: string
  message: string
  status: AlertStatus
}
