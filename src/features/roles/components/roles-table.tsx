import type { ColumnDef } from "@tanstack/react-table"
import { Pencil, Trash2 } from "lucide-react"
import { useMemo, type ReactNode } from "react"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { PermissionGuard } from "@/shared/auth"
import { Button, ConfirmDialog } from "@/shared/components/ui"
import { PERMISSIONS } from "@/shared/constants"

import type { Role } from "@/features/roles/types/role.types"

function getColumns({
  isDeletingRole,
  onDeleteRole,
  onEditRole,
}: Pick<
  RolesTableProps,
  "isDeletingRole" | "onDeleteRole" | "onEditRole"
>): ColumnDef<Role>[] {
  return [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Role" />
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "userCount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Users" />
      ),
    },
    {
      accessorKey: "permissionCount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Permissions" />
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const role = row.original
        const isDeleting = isDeletingRole?.(role.id) ?? false

        return (
          <PermissionGuard
            fallback={<span className="text-sm text-muted-foreground">-</span>}
            permission={PERMISSIONS.rolesManage}
          >
            <div className="flex flex-wrap gap-2">
              <Button
                aria-label={`Edit ${role.name}`}
                onClick={(event) => {
                  event.stopPropagation()
                  onEditRole?.(role)
                }}
                size="sm"
                variant="outline"
              >
                <Pencil aria-hidden="true" />
                Edit
              </Button>
              <ConfirmDialog
                confirmLabel={isDeleting ? "Deleting..." : "Delete"}
                description={`${role.name} will be removed from the role catalog.`}
                destructive
                onConfirm={() => onDeleteRole?.(role)}
                title="Delete role"
              >
                <Button
                  aria-label={`Delete ${role.name}`}
                  disabled={isDeleting}
                  onClick={(event) => event.stopPropagation()}
                  size="sm"
                  variant="destructive"
                >
                  <Trash2 aria-hidden="true" />
                  Delete
                </Button>
              </ConfirmDialog>
            </div>
          </PermissionGuard>
        )
      },
    },
  ]
}

type RolesTableProps = {
  data: Role[]
  isLoading?: boolean
  toolbarActions?: ReactNode
  onEditRole?: (role: Role) => void
  onDeleteRole?: (role: Role) => void
  isDeletingRole?: (roleId: string) => boolean
}

export function RolesTable({
  data,
  isDeletingRole,
  isLoading,
  onDeleteRole,
  onEditRole,
  toolbarActions,
}: RolesTableProps) {
  const columns = useMemo(
    () => getColumns({ isDeletingRole, onDeleteRole, onEditRole }),
    [isDeletingRole, onDeleteRole, onEditRole],
  )

  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No roles have been configured yet."
      emptyTitle="No roles found"
      isLoading={isLoading}
      searchPlaceholder="Search roles..."
      toolbarActions={toolbarActions}
    />
  )
}
