import { useQuery } from "@tanstack/react-query"

import { getReports } from "@/features/reports/api/reports-api"
import { reportsQueryKeys } from "@/features/reports/api/reports-query-keys"

export function useReports() {
  return useQuery({
    queryFn: getReports,
    queryKey: reportsQueryKeys.lists(),
  })
}
