import { useQuery } from "@tanstack/react-query"

import {
  getTagValueHistory,
  getTagValueHistoryFilterOptions,
} from "@/features/tag-value-history/api/tag-value-history-api"
import { tagValueHistoryQueryKeys } from "@/features/tag-value-history/api/tag-value-history-query-keys"
import type { TagValueHistoryFilters } from "@/features/tag-value-history/types/tag-value-history.types"

export function useTagValueHistory(filters?: TagValueHistoryFilters) {
  return useQuery({
    queryFn: () => getTagValueHistory(filters),
    queryKey: tagValueHistoryQueryKeys.lists(filters),
  })
}

export function useTagValueHistoryFilterOptions() {
  return useQuery({
    queryFn: getTagValueHistoryFilterOptions,
    queryKey: tagValueHistoryQueryKeys.filterOptions(),
  })
}
