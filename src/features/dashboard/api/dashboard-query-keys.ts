export const dashboardQueryKeys = {
  root: ["dashboard"] as const,
  overview: () => [...dashboardQueryKeys.root, "overview"] as const,
}
