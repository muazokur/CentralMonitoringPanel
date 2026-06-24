import type { ColumnDef } from "@tanstack/react-table"
import { Pencil, Trash2 } from "lucide-react"
import { useMemo, type ReactNode } from "react"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { PermissionGuard } from "@/shared/auth"
import { Button, StatusBadge } from "@/shared/components/ui"
import { PERMISSIONS } from "@/shared/constants"

import type { PlatformUser } from "@/features/users/types/user.types"

function getColumns({
  isDeletingUser,
  onDeleteUser,
  onEditUser,
}: Pick<
  UsersTableProps,
  "isDeletingUser" | "onDeleteUser" | "onEditUser"
>): ColumnDef<PlatformUser>[] {
  return [
    {
      accessorKey: "fullName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="User" />
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <StatusBadge status={row.original.status} />,
    },
    {
      accessorKey: "lastLogin",
      header: "Last login",
      cell: ({ row }) =>
        row.original.lastLogin
          ? new Date(row.original.lastLogin).toLocaleString()
          : "Never",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const user = row.original
        const isDeleting = isDeletingUser?.(user.id) ?? false

        return (
          <PermissionGuard
            fallback={<span className="text-sm text-muted-foreground">-</span>}
            permission={PERMISSIONS.usersManage}
          >
            <div className="flex flex-wrap gap-2">
              <Button
                aria-label={`Edit ${user.fullName}`}
                onClick={(event) => {
                  event.stopPropagation()
                  onEditUser?.(user)
                }}
                size="sm"
                variant="outline"
              >
                <Pencil aria-hidden="true" />
                Edit
              </Button>
              <Button
                aria-label={`Delete ${user.fullName}`}
                disabled={isDeleting}
                onClick={(event) => {
                  event.stopPropagation()
                  onDeleteUser?.(user)
                }}
                size="sm"
                variant="destructive"
              >
                <Trash2 aria-hidden="true" />
                Delete
              </Button>
            </div>
          </PermissionGuard>
        )
      },
    },
  ]
}

type UsersTableProps = {
  data: PlatformUser[]
  isLoading?: boolean
  toolbarActions?: ReactNode
  onEditUser?: (user: PlatformUser) => void
  onDeleteUser?: (user: PlatformUser) => void
  isDeletingUser?: (userId: string) => boolean
}

export function UsersTable({
  data,
  isDeletingUser,
  isLoading,
  onDeleteUser,
  onEditUser,
  toolbarActions,
}: UsersTableProps) {
  const columns = useMemo(
    () => getColumns({ isDeletingUser, onDeleteUser, onEditUser }),
    [isDeletingUser, onDeleteUser, onEditUser],
  )

  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No users have been invited yet."
      emptyTitle="No users found"
      isLoading={isLoading}
      searchPlaceholder="Search users..."
      toolbarActions={toolbarActions}
    />
  )
}
