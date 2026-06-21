import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  createAlert,
  deleteAlert,
  updateAlert,
} from "@/features/alerts/api/alerts-api"
import { alertsQueryKeys } from "@/features/alerts/api/alerts-query-keys"
import type { AlertFormValues } from "@/features/alerts/types/alert.types"

export function useCreateAlert() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createAlert,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: alertsQueryKeys.all }),
  })
}

export function useUpdateAlert(alertId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (values: AlertFormValues) => updateAlert(alertId, values),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: alertsQueryKeys.all }),
  })
}

export function useDeleteAlert() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteAlert,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: alertsQueryKeys.all }),
  })
}
