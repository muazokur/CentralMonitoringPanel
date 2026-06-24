import { useCallback, useState } from "react"

import {
  RolesPageActions,
  RolesTable,
  useDeleteRole,
  useRoles,
  type Role,
} from "@/features/roles"
import { ErrorState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"
import { useToast } from "@/shared/components/ui"

const EMPTY_ROLES: Role[] = []

export function RolesPage() {
  const { showToast } = useToast()
  const [deletingRoleId, setDeletingRoleId] = useState<string | null>(null)
  const { data, error, isError, isLoading } = useRoles()
  const deleteRoleMutation = useDeleteRole()
  const roles = data ?? EMPTY_ROLES

  const createRole = useCallback(() => {
    showToast({
      description: "Role create modal wiring will be added when role workflows are enabled.",
      title: "Create role",
      tone: "default",
    })
  }, [showToast])

  const editRole = useCallback((role: Role) => {
    showToast({
      description: `${role.name} can be edited when the role form workflow is enabled.`,
      title: "Edit role",
      tone: "default",
    })
  }, [showToast])

  const deleteRole = useCallback((role: Role) => {
    setDeletingRoleId(role.id)
    deleteRoleMutation.mutate(role.id, {
      onError: () => {
        showToast({
          description: `${role.name} could not be deleted. Please try again.`,
          title: "Delete failed",
          tone: "danger",
        })
      },
      onSettled: () => setDeletingRoleId(null),
      onSuccess: () => {
        showToast({
          description: `${role.name} delete request completed in mock mode.`,
          title: "Role deleted",
          tone: "success",
        })
      },
    })
  }, [deleteRoleMutation, showToast])

  const isDeletingRole = useCallback((roleId: string) => (
    deleteRoleMutation.isPending && deletingRoleId === roleId
  ), [deleteRoleMutation.isPending, deletingRoleId])

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Roles could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Review access roles, assigned users and permission coverage."
          title="Roles"
        />
        <PageContent>
          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Roles unavailable"
            />
          ) : (
            <RolesTable
              data={roles}
              isDeletingRole={isDeletingRole}
              isLoading={isLoading}
              onDeleteRole={deleteRole}
              onEditRole={editRole}
              toolbarActions={<RolesPageActions onCreateRole={createRole} />}
            />
          )}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
