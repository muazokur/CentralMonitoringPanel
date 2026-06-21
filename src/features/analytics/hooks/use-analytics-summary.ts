import { useQuery } from "@tanstack/react-query"

import { getAnalyticsSummary } from "@/features/analytics/api/analytics-api"
import { analyticsQueryKeys } from "@/features/analytics/api/analytics-query-keys"

export function useAnalyticsSummary() {
  return useQuery({
    queryFn: getAnalyticsSummary,
    queryKey: analyticsQueryKeys.summary(),
  })
}
