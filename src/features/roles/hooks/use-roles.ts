import { useQuery } from "@tanstack/react-query"

import { getRoles } from "@/features/roles/api/roles-api"
import { rolesQueryKeys } from "@/features/roles/api/roles-query-keys"

export function useRoles() {
  return useQuery({
    queryFn: getRoles,
    queryKey: rolesQueryKeys.lists(),
  })
}
