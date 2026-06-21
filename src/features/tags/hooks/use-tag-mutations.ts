import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createTag, deleteTag, updateTag } from "@/features/tags/api/tags-api"
import { tagsQueryKeys } from "@/features/tags/api/tags-query-keys"
import type { TagFormValues } from "@/features/tags/types/tag.types"

export function useCreateTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTag,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: tagsQueryKeys.all }),
  })
}

export function useUpdateTag(tagId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (values: TagFormValues) => updateTag(tagId, values),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: tagsQueryKeys.all }),
  })
}

export function useDeleteTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteTag,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: tagsQueryKeys.all }),
  })
}
