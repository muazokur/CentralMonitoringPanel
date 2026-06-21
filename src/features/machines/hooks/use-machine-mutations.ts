import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  createMachine,
  deleteMachine,
  updateMachine,
} from "@/features/machines/api/machines-api"
import { machinesQueryKeys } from "@/features/machines/api/machines-query-keys"
import type { MachineFormValues } from "@/features/machines/types/machine.types"

export function useCreateMachine() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createMachine,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: machinesQueryKeys.all }),
  })
}

export function useUpdateMachine(machineId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (values: MachineFormValues) => updateMachine(machineId, values),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: machinesQueryKeys.all }),
  })
}

export function useDeleteMachine() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteMachine,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: machinesQueryKeys.all }),
  })
}
