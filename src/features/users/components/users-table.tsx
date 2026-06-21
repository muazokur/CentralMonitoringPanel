import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge } from "@/shared/components/ui"

import type { PlatformUser } from "@/features/users/types/user.types"

const columns: ColumnDef<PlatformUser>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="User" />,
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
]

type UsersTableProps = {
  data: PlatformUser[]
  isLoading?: boolean
}

export function UsersTable({ data, isLoading }: UsersTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No users have been invited yet."
      emptyTitle="No users found"
      isLoading={isLoading}
      searchPlaceholder="Search users..."
    />
  )
}
