import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"

import { ROUTE_PATHS } from "@/app/router/route-paths"
import { authQueryKeys } from "@/features/auth/api/auth-query-keys"
import { logout } from "@/features/auth/api/auth-api"
import { queryClient } from "@/shared/api"
import { useAuth } from "@/shared/auth"

export function useLogout() {
  const navigate = useNavigate()
  const { clearSession } = useAuth()

  return useMutation({
    mutationFn: logout,
    onSettled: () => {
      clearSession()
      queryClient.removeQueries({ queryKey: authQueryKeys.root })
      navigate(ROUTE_PATHS.login, { replace: true })
    },
  })
}
