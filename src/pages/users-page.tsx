import { useCallback, useState } from "react"

import {
  UsersPageActions,
  UsersTable,
  useDeleteUser,
  useUsers,
  type PlatformUser,
} from "@/features/users"
import { ErrorState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"
import { useToast } from "@/shared/components/ui"

const EMPTY_USERS: PlatformUser[] = []

export function UsersPage() {
  const { showToast } = useToast()
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null)
  const { data, error, isError, isLoading } = useUsers()
  const deleteUserMutation = useDeleteUser()
  const users = data ?? EMPTY_USERS

  const inviteUser = useCallback(() => {
    showToast({
      description: "Invite modal wiring will be added when user create workflows are enabled.",
      title: "Invite user",
      tone: "default",
    })
  }, [showToast])

  const editUser = useCallback((user: PlatformUser) => {
    showToast({
      description: `${user.fullName} can be edited when the user form workflow is enabled.`,
      title: "Edit user",
      tone: "default",
    })
  }, [showToast])

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
          description: `${user.fullName} delete request completed in mock mode.`,
          title: "User deleted",
          tone: "success",
        })
      },
    })
  }, [deleteUserMutation, showToast])

  const isDeletingUser = useCallback((userId: string) => (
    deleteUserMutation.isPending && deletingUserId === userId
  ), [deleteUserMutation.isPending, deletingUserId])

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Users could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Manage platform users, role assignments and account status."
          title="Users"
        />
        <PageContent>
          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Users unavailable"
            />
          ) : (
            <UsersTable
              data={users}
              isDeletingUser={isDeletingUser}
              isLoading={isLoading}
              onDeleteUser={deleteUser}
              onEditUser={editUser}
              toolbarActions={<UsersPageActions onInviteUser={inviteUser} />}
            />
          )}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
