export const tagsQueryKeys = {
  all: ["tags"] as const,
  lists: () => [...tagsQueryKeys.all, "list"] as const,
  detail: (tagId: string) => [...tagsQueryKeys.all, "detail", tagId] as const,
}
