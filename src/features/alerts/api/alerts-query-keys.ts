export const alertsQueryKeys = {
  all: ["alerts"] as const,
  lists: () => [...alertsQueryKeys.all, "list"] as const,
}
