export const tagValueHistoryQueryKeys = {
  all: ["tag-value-history"] as const,
  lists: () => [...tagValueHistoryQueryKeys.all, "list"] as const,
}
