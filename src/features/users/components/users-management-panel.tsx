import { useCallback, useMemo, useState } from "react"

import { useRoles } from "@/features/roles"
import { UserFormDialog } from "@/features/users/components/user-form-dialog"
import { UsersPageActions } from "@/features/users/components/users-page-actions"
import { UsersTable } from "@/features/users/components/users-table"
import {
  useCreateUser,
  useDeleteUser,
  useUpdateUser,
} from "@/features/users/hooks/use-user-mutations"
import { useUsers } from "@/features/users/hooks/use-users"
import type {
  PlatformUser,
  UserFormValues,
} from "@/features/users/types/user.types"
import { ErrorState } from "@/shared/components/feedback"
import { useToast } from "@/shared/components/ui"
import type { SelectOption } from "@/shared/types"

const EMPTY_USERS: PlatformUser[] = []

export function UsersManagementPanel() {
  const { showToast } = useToast()
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null)
  const [dialogMode, setDialogMode] = useState<"create" | "edit">("create")
  const [selectedUser, setSelectedUser] = useState<PlatformUser | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { data, error, isError, isLoading } = useUsers()
  const { data: roles } = useRoles()
  const createUserMutation = useCreateUser()
  const updateUserMutation = useUpdateUser(selectedUser?.id ?? "")
  const deleteUserMutation = useDeleteUser()
  const users = data ?? EMPTY_USERS

  const roleOptions = useMemo<SelectOption[]>(() => {
    if (roles?.length) {
      return roles.map((role) => ({
        label: role.name,
        value: role.name,
      }))
    }

    return Array.from(new Set(users.map((user) => user.role))).map((role) => ({
      label: role,
      value: role,
    }))
  }, [roles, users])

  const openCreateDialog = useCallback(() => {
    setDialogMode("create")
    setSelectedUser(null)
    setIsDialogOpen(true)
  }, [])

  const openEditDialog = useCallback((user: PlatformUser) => {
    setDialogMode("edit")
    setSelectedUser(user)
    setIsDialogOpen(true)
  }, [])

  const closeDialog = useCallback((open: boolean) => {
    setIsDialogOpen(open)

    if (!open) {
      setSelectedUser(null)
    }
  }, [])

  const submitUser = useCallback((values: UserFormValues) => {
    const mutation =
      dialogMode === "create" ? createUserMutation : updateUserMutation

    mutation.mutate(values, {
      onError: () => {
        showToast({
          description: "The user changes could not be saved. Please try again.",
          title: "Save failed",
          tone: "danger",
        })
      },
      onSuccess: () => {
        closeDialog(false)
        showToast({
          description:
            dialogMode === "create"
              ? "The user invitation has been prepared."
              : "The user profile has been updated.",
          title: dialogMode === "create" ? "User invited" : "User updated",
          tone: "success",
        })
      },
    })
  }, [closeDialog, createUserMutation, dialogMode, showToast, updateUserMutation])

  const deleteUser = useCallback((user: PlatformUser) => {
    setDeletingUserId(user.id)
    deleteUserMutation.mutate(user.id, {
      onError: () => {
        showToast({
          description: `${user.fullName} could not be deleted. Please try again.`,
          title: "Delete failed",
          tone: "danger",
        })
      },
      onSettled: () => setDeletingUserId(null),
      onSuccess: () => {
        showToast({
          description: `${user.fullName} has been removed from platform access.`,
          title: "User deleted",
          tone: "success",
        })
      },
    })
  }, [deleteUserMutation, showToast])

  const isDeletingUser = useCallback(
    (userId: string) => deleteUserMutation.isPending && deletingUserId === userId,
    [deleteUserMutation.isPending, deletingUserId],
  )

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Users could not be loaded. Please try again."

  if (isError) {
    return (
      <ErrorState description={errorDescription} title="Users unavailable" />
    )
  }

  return (
    <>
      <UsersTable
        data={users}
        isDeletingUser={isDeletingUser}
        isLoading={isLoading}
        onDeleteUser={deleteUser}
        onEditUser={openEditDialog}
        toolbarActions={<UsersPageActions onInviteUser={openCreateDialog} />}
      />
      <UserFormDialog
        isSubmitting={createUserMutation.isPending || updateUserMutation.isPending}
        mode={dialogMode}
        onOpenChange={closeDialog}
        onSubmit={submitUser}
        open={isDialogOpen}
        roleOptions={roleOptions}
        user={selectedUser}
      />
    </>
  )
}
