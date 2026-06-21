import { useQuery } from "@tanstack/react-query"

import { getTags } from "@/features/tags/api/tags-api"
import { tagsQueryKeys } from "@/features/tags/api/tags-query-keys"

export function useTags() {
  return useQuery({
    queryFn: getTags,
    queryKey: tagsQueryKeys.lists(),
  })
}
