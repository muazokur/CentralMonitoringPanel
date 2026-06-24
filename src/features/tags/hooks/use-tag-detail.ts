import { useQuery } from "@tanstack/react-query"

import { getTagDetail } from "@/features/tags/api/tags-api"
import { tagsQueryKeys } from "@/features/tags/api/tags-query-keys"

export function useTagDetail(tagId: string) {
  return useQuery({
    enabled: Boolean(tagId),
    queryFn: () => getTagDetail(tagId),
    queryKey: tagsQueryKeys.detail(tagId),
  })
}
