import type { ReactNode } from "react"
import { Navigate, Outlet } from "react-router"

import { ROUTE_PATHS } from "@/app/router/route-paths"
import { useAuth } from "@/shared/auth"

type PublicRouteProps = {
  children?: ReactNode
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate replace to={ROUTE_PATHS.dashboard} />
  }

  return children ?? <Outlet />
}
