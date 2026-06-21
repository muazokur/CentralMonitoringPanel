export const machinesQueryKeys = {
  all: ["machines"] as const,
  lists: () => [...machinesQueryKeys.all, "list"] as const,
  detail: (machineId: string) =>
    [...machinesQueryKeys.all, "detail", machineId] as const,
}
