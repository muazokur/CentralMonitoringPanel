import { useQuery } from "@tanstack/react-query"

import { getOeeSummary } from "@/features/oee/api/oee-api"
import { oeeQueryKeys } from "@/features/oee/api/oee-query-keys"

export function useOeeSummary() {
  return useQuery({
    queryFn: getOeeSummary,
    queryKey: oeeQueryKeys.summary(),
  })
}
