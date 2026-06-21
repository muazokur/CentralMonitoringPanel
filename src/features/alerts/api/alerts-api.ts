import { simulateNetwork } from "@/features/mock-utils"
import { alertsMock } from "@/features/alerts/mocks/alerts.mock"
import type { Alert, AlertFormValues } from "@/features/alerts/types/alert.types"

export async function getAlerts(): Promise<Alert[]> {
  return simulateNetwork(alertsMock)
}

export async function createAlert(values: AlertFormValues): Promise<Alert> {
  return simulateNetwork({
    id: `alert-${crypto.randomUUID()}`,
    createdAt: new Date().toISOString(),
    machine: values.machineId,
    message: values.message,
    severity: values.severity,
    status: values.status,
    tag: values.tagId,
  })
}

export async function updateAlert(
  alertId: string,
  values: AlertFormValues,
): Promise<Alert> {
  return simulateNetwork({
    id: alertId,
    createdAt: alertsMock[0].createdAt,
    machine: values.machineId,
    message: values.message,
    resolvedAt: values.status === "resolved" ? new Date().toISOString() : undefined,
    severity: values.severity,
    status: values.status,
    tag: values.tagId,
  })
}

export async function deleteAlert(alertId: string): Promise<{ id: string }> {
  return simulateNetwork({ id: alertId })
}
