import { useQuery } from "@tanstack/react-query"

import { getTagValueHistory } from "@/features/tag-value-history/api/tag-value-history-api"
import { tagValueHistoryQueryKeys } from "@/features/tag-value-history/api/tag-value-history-query-keys"

export function useTagValueHistory() {
  return useQuery({
    queryFn: getTagValueHistory,
    queryKey: tagValueHistoryQueryKeys.lists(),
  })
}
