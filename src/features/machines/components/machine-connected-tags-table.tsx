import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge } from "@/shared/components/ui"

import type { MachineConnectedTag } from "@/features/machines/types/machine.types"

const columns: ColumnDef<MachineConnectedTag>[] = [
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
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => (
      <StatusBadge status={row.original.isActive ? "active" : "inactive"} />
    ),
  },
]

type MachineConnectedTagsTableProps = {
  data: MachineConnectedTag[]
}

export function MachineConnectedTagsTable({
  data,
}: MachineConnectedTagsTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="This machine does not have connected tags."
      emptyTitle="No connected tags"
      searchPlaceholder="Search tags..."
    />
  )
}
