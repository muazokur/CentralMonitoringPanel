export const authQueryKeys = {
  root: ["auth"] as const,
  currentUser: () => [...authQueryKeys.root, "current-user"] as const,
}
