export const reportsQueryKeys = {
  all: ["reports"] as const,
  lists: () => [...reportsQueryKeys.all, "list"] as const,
}
