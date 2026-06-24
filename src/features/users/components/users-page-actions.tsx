import { UserPlus } from "lucide-react"

import { PermissionGuard } from "@/shared/auth"
import { Button } from "@/shared/components/ui"
import { PERMISSIONS } from "@/shared/constants"

type UsersPageActionsProps = {
  onInviteUser: () => void
}

export function UsersPageActions({ onInviteUser }: UsersPageActionsProps) {
  return (
    <PermissionGuard permission={PERMISSIONS.usersManage}>
      <Button onClick={onInviteUser}>
        <UserPlus aria-hidden="true" />
        Invite user
      </Button>
    </PermissionGuard>
  )
}
