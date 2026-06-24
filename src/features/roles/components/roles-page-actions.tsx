import { ShieldPlus } from "lucide-react"

import { PermissionGuard } from "@/shared/auth"
import { Button } from "@/shared/components/ui"
import { PERMISSIONS } from "@/shared/constants"

type RolesPageActionsProps = {
  onCreateRole: () => void
}

export function RolesPageActions({ onCreateRole }: RolesPageActionsProps) {
  return (
    <PermissionGuard permission={PERMISSIONS.rolesManage}>
      <Button onClick={onCreateRole}>
        <ShieldPlus aria-hidden="true" />
        Create role
      </Button>
    </PermissionGuard>
  )
}
