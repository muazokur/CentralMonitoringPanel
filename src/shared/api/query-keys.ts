export const queryKeys = {
  root: ["central-monitoring"] as const,
  scope: (scope: string) => [...queryKeys.root, scope] as const,
  entity: (scope: string, id: string | number) =>
    [...queryKeys.scope(scope), id] as const,
}
