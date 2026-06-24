import type { TagValueHistoryFilters } from "@/features/tag-value-history/types/tag-value-history.types"

export const tagValueHistoryQueryKeys = {
  all: ["tag-value-history"] as const,
  lists: (filters?: TagValueHistoryFilters) =>
    [...tagValueHistoryQueryKeys.all, "list", filters ?? {}] as const,
  filterOptions: () =>
    [...tagValueHistoryQueryKeys.all, "filter-options"] as const,
}
