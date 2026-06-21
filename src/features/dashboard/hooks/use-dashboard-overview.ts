import { useQuery } from "@tanstack/react-query"

import { getDashboardOverview } from "@/features/dashboard/api/dashboard-api"
import { dashboardQueryKeys } from "@/features/dashboard/api/dashboard-query-keys"

export function useDashboardOverview() {
  return useQuery({
    queryKey: dashboardQueryKeys.overview(),
    queryFn: getDashboardOverview,
  })
}
