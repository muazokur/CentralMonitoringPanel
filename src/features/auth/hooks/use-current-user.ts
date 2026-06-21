import { useQuery } from "@tanstack/react-query"

import { authQueryKeys } from "@/features/auth/api/auth-query-keys"
import { getCurrentUser } from "@/features/auth/api/auth-api"
import { useAuth } from "@/shared/auth"

export function useCurrentUser() {
  const { isAuthenticated, user } = useAuth()

  return useQuery({
    queryKey: authQueryKeys.currentUser(),
    queryFn: getCurrentUser,
    enabled: isAuthenticated,
    initialData: user ?? undefined,
    staleTime: 60_000,
  })
}
