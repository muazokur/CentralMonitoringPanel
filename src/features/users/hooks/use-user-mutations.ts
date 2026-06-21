import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  createUser,
  deleteUser,
  updateUser,
} from "@/features/users/api/users-api"
import { usersQueryKeys } from "@/features/users/api/users-query-keys"
import type { UserFormValues } from "@/features/users/types/user.types"

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: usersQueryKeys.all }),
  })
}

export function useUpdateUser(userId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (values: UserFormValues) => updateUser(userId, values),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: usersQueryKeys.all }),
  })
}

export function useDeleteUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: usersQueryKeys.all }),
  })
}
