export const oeeQueryKeys = {
  all: ["oee"] as const,
  summary: () => [...oeeQueryKeys.all, "summary"] as const,
}
