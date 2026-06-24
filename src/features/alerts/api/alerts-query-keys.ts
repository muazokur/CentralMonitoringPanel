import type { AlertFilters } from "@/features/alerts/types/alert.types"

export const alertsQueryKeys = {
  all: ["alerts"] as const,
  lists: (filters?: AlertFilters) =>
    [...alertsQueryKeys.all, "list", filters ?? {}] as const,
  filterOptions: () => [...alertsQueryKeys.all, "filter-options"] as const,
}
