import { useMutation } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router"

import { ROUTE_PATHS } from "@/app/router/route-paths"
import { authQueryKeys } from "@/features/auth/api/auth-query-keys"
import { login } from "@/features/auth/api/auth-api"
import type { LoginRequest } from "@/features/auth/types/auth.types"
import { queryClient } from "@/shared/api"
import { useAuth } from "@/shared/auth"

type RedirectLocationState = {
  from?: {
    pathname?: string
    search?: string
  }
}

function getRedirectPath(state: unknown) {
  const redirectState = state as RedirectLocationState | null
  const pathname = redirectState?.from?.pathname
  const search = redirectState?.from?.search ?? ""

  return pathname ? `${pathname}${search}` : ROUTE_PATHS.dashboard
}

export function useLogin() {
  const location = useLocation()
  const navigate = useNavigate()
  const { setSession } = useAuth()

  return useMutation({
    mutationFn: (request: LoginRequest) => login(request),
    onSuccess: (session) => {
      setSession(session)
      queryClient.setQueryData(authQueryKeys.currentUser(), session.user)
      navigate(getRedirectPath(location.state), { replace: true })
    },
  })
}
