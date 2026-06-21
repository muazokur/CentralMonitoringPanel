import type { ReactNode } from "react"

import { usePermission } from "@/shared/auth/use-permission"
import type { Permission } from "@/shared/constants"
import { cn } from "@/shared/lib/utils"

type PermissionGuardProps = {
  permission?: Permission | Permission[]
  mode?: "all" | "any"
  fallback?: ReactNode
  behavior?: "hide" | "disable"
  children: ReactNode
}

function normalizePermissions(permission?: Permission | Permission[]) {
  if (!permission) {
    return []
  }

  return Array.isArray(permission) ? permission : [permission]
}

export function PermissionGuard({
  permission,
  mode = "all",
  fallback = null,
  behavior = "hide",
  children,
}: PermissionGuardProps) {
  const permissions = normalizePermissions(permission)
  const { canAll, canAny } = usePermission()
  const isAllowed =
    permissions.length === 0 ||
    (mode === "all" ? canAll(permissions) : canAny(permissions))

  if (isAllowed) {
    return children
  }

  if (fallback) {
    return fallback
  }

  if (behavior === "disable") {
    return (
      <span
        aria-disabled="true"
        className={cn(
          "inline-flex cursor-not-allowed opacity-50 [&_*]:pointer-events-none",
        )}
      >
        {children}
      </span>
    )
  }

  return null
}
