export const tagsQueryKeys = {
  all: ["tags"] as const,
  lists: () => [...tagsQueryKeys.all, "list"] as const,
}
