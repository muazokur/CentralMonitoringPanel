import { simulateNetwork } from "@/features/mock-utils"
import { alertsMock } from "@/features/alerts/mocks/alerts.mock"
import type {
  Alert,
  AlertFilterOptions,
  AlertFilters,
  AlertFormValues,
} from "@/features/alerts/types/alert.types"

function matchesFilters(alert: Alert, filters?: AlertFilters) {
  if (!filters) {
    return true
  }

  return (
    (!filters.machine || alert.machine === filters.machine) &&
    (!filters.severity || alert.severity === filters.severity) &&
    (!filters.status || alert.status === filters.status)
  )
}

export async function getAlerts(filters?: AlertFilters): Promise<Alert[]> {
  return simulateNetwork(alertsMock.filter((alert) => matchesFilters(alert, filters)))
}

export async function getAlertFilterOptions(): Promise<AlertFilterOptions> {
  return simulateNetwork({
    machines: Array.from(new Set(alertsMock.map((alert) => alert.machine)))
      .sort((first, second) => first.localeCompare(second))
      .map((machine) => ({
        label: machine,
        value: machine,
      })),
  })
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
