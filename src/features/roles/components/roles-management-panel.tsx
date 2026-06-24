import { useCallback, useState } from "react"

import { RoleFormDialog } from "@/features/roles/components/role-form-dialog"
import { RolesPageActions } from "@/features/roles/components/roles-page-actions"
import { RolesTable } from "@/features/roles/components/roles-table"
import {
  useCreateRole,
  useDeleteRole,
  useUpdateRole,
} from "@/features/roles/hooks/use-role-mutations"
import { useRoles } from "@/features/roles/hooks/use-roles"
import type { Role, RoleFormValues } from "@/features/roles/types/role.types"
import { ErrorState } from "@/shared/components/feedback"
import { useToast } from "@/shared/components/ui"

const EMPTY_ROLES: Role[] = []

export function RolesManagementPanel() {
  const { showToast } = useToast()
  const [deletingRoleId, setDeletingRoleId] = useState<string | null>(null)
  const [dialogMode, setDialogMode] = useState<"create" | "edit">("create")
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { data, error, isError, isLoading } = useRoles()
  const createRoleMutation = useCreateRole()
  const updateRoleMutation = useUpdateRole(selectedRole?.id ?? "")
  const deleteRoleMutation = useDeleteRole()
  const roles = data ?? EMPTY_ROLES

  const openCreateDialog = useCallback(() => {
    setDialogMode("create")
    setSelectedRole(null)
    setIsDialogOpen(true)
  }, [])

  const openEditDialog = useCallback((role: Role) => {
    setDialogMode("edit")
    setSelectedRole(role)
    setIsDialogOpen(true)
  }, [])

  const closeDialog = useCallback((open: boolean) => {
    setIsDialogOpen(open)

    if (!open) {
      setSelectedRole(null)
    }
  }, [])

  const submitRole = useCallback((values: RoleFormValues) => {
    const mutation =
      dialogMode === "create" ? createRoleMutation : updateRoleMutation

    mutation.mutate(values, {
      onError: () => {
        showToast({
          description: "The role changes could not be saved. Please try again.",
          title: "Save failed",
          tone: "danger",
        })
      },
      onSuccess: () => {
        closeDialog(false)
        showToast({
          description:
            dialogMode === "create"
              ? "The role has been added to the access catalog."
              : "The role has been updated.",
          title: dialogMode === "create" ? "Role created" : "Role updated",
          tone: "success",
        })
      },
    })
  }, [closeDialog, createRoleMutation, dialogMode, showToast, updateRoleMutation])

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
          description: `${role.name} has been removed from the role catalog.`,
          title: "Role deleted",
          tone: "success",
        })
      },
    })
  }, [deleteRoleMutation, showToast])

  const isDeletingRole = useCallback(
    (roleId: string) => deleteRoleMutation.isPending && deletingRoleId === roleId,
    [deleteRoleMutation.isPending, deletingRoleId],
  )

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Roles could not be loaded. Please try again."

  if (isError) {
    return (
      <ErrorState description={errorDescription} title="Roles unavailable" />
    )
  }

  return (
    <>
      <RolesTable
        data={roles}
        isDeletingRole={isDeletingRole}
        isLoading={isLoading}
        onDeleteRole={deleteRole}
        onEditRole={openEditDialog}
        toolbarActions={<RolesPageActions onCreateRole={openCreateDialog} />}
      />
      <RoleFormDialog
        isSubmitting={createRoleMutation.isPending || updateRoleMutation.isPending}
        mode={dialogMode}
        onOpenChange={closeDialog}
        onSubmit={submitRole}
        open={isDialogOpen}
        role={selectedRole}
      />
    </>
  )
}
