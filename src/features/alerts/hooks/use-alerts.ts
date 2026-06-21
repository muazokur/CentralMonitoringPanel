import { useQuery } from "@tanstack/react-query"

import { getAlerts } from "@/features/alerts/api/alerts-api"
import { alertsQueryKeys } from "@/features/alerts/api/alerts-query-keys"

export function useAlerts() {
  return useQuery({
    queryFn: getAlerts,
    queryKey: alertsQueryKeys.lists(),
  })
}
