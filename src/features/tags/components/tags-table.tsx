import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge } from "@/shared/components/ui"

import type { PlcTag } from "@/features/tags/types/tag.types"

const columns: ColumnDef<PlcTag>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tag" />,
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "dataType",
    header: "Type",
  },
  {
    accessorKey: "unit",
    header: "Unit",
    cell: ({ row }) => row.original.unit || "-",
  },
  {
    accessorKey: "machine",
    header: "Machine",
  },
  {
    accessorKey: "gateway",
    header: "Gateway",
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => (
      <StatusBadge status={row.original.isActive ? "active" : "inactive"} />
    ),
  },
]

type TagsTableProps = {
  data: PlcTag[]
  isLoading?: boolean
}

export function TagsTable({ data, isLoading }: TagsTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No PLC tags are available for the current filters."
      emptyTitle="No tags found"
      isLoading={isLoading}
      searchPlaceholder="Search tags..."
    />
  )
}
