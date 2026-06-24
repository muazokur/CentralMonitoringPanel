import { useQuery } from "@tanstack/react-query"

import {
  getAlertFilterOptions,
  getAlerts,
} from "@/features/alerts/api/alerts-api"
import { alertsQueryKeys } from "@/features/alerts/api/alerts-query-keys"
import type { AlertFilters } from "@/features/alerts/types/alert.types"

export function useAlerts(filters?: AlertFilters) {
  return useQuery({
    queryFn: () => getAlerts(filters),
    queryKey: alertsQueryKeys.lists(filters),
  })
}

export function useAlertFilterOptions() {
  return useQuery({
    queryFn: getAlertFilterOptions,
    queryKey: alertsQueryKeys.filterOptions(),
  })
}
