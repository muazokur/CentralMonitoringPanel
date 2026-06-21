export const rolesQueryKeys = {
  all: ["roles"] as const,
  lists: () => [...rolesQueryKeys.all, "list"] as const,
}
