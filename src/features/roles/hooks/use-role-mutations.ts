import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  createRole,
  deleteRole,
  updateRole,
} from "@/features/roles/api/roles-api"
import { rolesQueryKeys } from "@/features/roles/api/roles-query-keys"
import type { RoleFormValues } from "@/features/roles/types/role.types"

export function useCreateRole() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createRole,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: rolesQueryKeys.all }),
  })
}

export function useUpdateRole(roleId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (values: RoleFormValues) => updateRole(roleId, values),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: rolesQueryKeys.all }),
  })
}

export function useDeleteRole() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteRole,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: rolesQueryKeys.all }),
  })
}
