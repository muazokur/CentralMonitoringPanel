import { useQuery } from "@tanstack/react-query"

import { getUsers } from "@/features/users/api/users-api"
import { usersQueryKeys } from "@/features/users/api/users-query-keys"

export function useUsers() {
  return useQuery({
    queryFn: getUsers,
    queryKey: usersQueryKeys.lists(),
  })
}
