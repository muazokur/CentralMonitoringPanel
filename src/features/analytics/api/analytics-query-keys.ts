export const analyticsQueryKeys = {
  all: ["analytics"] as const,
  summary: () => [...analyticsQueryKeys.all, "summary"] as const,
}
