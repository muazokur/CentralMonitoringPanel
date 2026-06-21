import { useCallback } from "react"

import { useAuth } from "@/shared/auth/use-auth"
import type { Permission } from "@/shared/constants"

export function usePermission() {
  const { hasPermission } = useAuth()

  const can = useCallback(
    (permission: Permission) => hasPermission(permission),
    [hasPermission],
  )

  const canAny = useCallback(
    (permissions: Permission[]) =>
      permissions.length === 0 ||
      permissions.some((permission) => hasPermission(permission)),
    [hasPermission],
  )

  const canAll = useCallback(
    (permissions: Permission[]) =>
      permissions.every((permission) => hasPermission(permission)),
    [hasPermission],
  )

  return {
    can,
    canAny,
    canAll,
  }
}
