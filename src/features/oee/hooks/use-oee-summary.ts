import { useQuery } from "@tanstack/react-query"

import { getOeeSummary } from "@/features/oee/api/oee-api"
import { oeeQueryKeys } from "@/features/oee/api/oee-query-keys"
import type { OeeDateRangeFilter } from "@/features/oee/types/oee.types"

export function useOeeSummary(filter?: OeeDateRangeFilter) {
  return useQuery({
    queryFn: () => getOeeSummary(filter),
    queryKey: oeeQueryKeys.summary(filter),
  })
}
