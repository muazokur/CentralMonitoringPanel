import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"

import type { Role } from "@/features/roles/types/role.types"

const columns: ColumnDef<Role>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "userCount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Users" />,
  },
  {
    accessorKey: "permissionCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Permissions" />
    ),
  },
]

type RolesTableProps = {
  data: Role[]
  isLoading?: boolean
}

export function RolesTable({ data, isLoading }: RolesTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No roles have been configured yet."
      emptyTitle="No roles found"
      isLoading={isLoading}
      searchPlaceholder="Search roles..."
    />
  )
}
