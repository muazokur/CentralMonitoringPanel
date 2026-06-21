import type { ReactNode } from "react"
import { Navigate, Outlet, useLocation } from "react-router"

import { ROUTE_PATHS } from "@/app/router/route-paths"
import { useAuth } from "@/shared/auth"
import type { Permission } from "@/shared/constants"

type ProtectedRouteProps = {
  children?: ReactNode
  requiredPermissions?: Permission[]
  requiredRoles?: string[]
}

export function ProtectedRoute({
  children,
  requiredPermissions = [],
  requiredRoles = [],
}: ProtectedRouteProps) {
  const location = useLocation()
  const { hasPermission, hasRole, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        state={{ from: location }}
        to={ROUTE_PATHS.login}
      />
    )
  }

  const lacksRole =
    requiredRoles.length > 0 && !requiredRoles.some((role) => hasRole(role))
  const lacksPermission =
    requiredPermissions.length > 0 &&
    !requiredPermissions.every((permission) => hasPermission(permission))

  if (lacksRole || lacksPermission) {
    return <Navigate replace to={ROUTE_PATHS.forbidden} />
  }

  return children ?? <Outlet />
}
