import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"

import {
  MachineStateBadge,
  MachineStatusBadge,
} from "@/features/machines/components/machine-status-badge"
import type { Machine } from "@/features/machines/types/machine.types"

const columns: ColumnDef<Machine>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Machine" />
    ),
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <MachineStatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "gateway",
    header: "Gateway",
  },
  {
    accessorKey: "currentState",
    header: "State",
    cell: ({ row }) => <MachineStateBadge state={row.original.currentState} />,
  },
  {
    accessorKey: "oee",
    header: ({ column }) => <DataTableColumnHeader column={column} title="OEE" />,
    cell: ({ row }) => `${row.original.oee.toFixed(1)}%`,
  },
  {
    accessorKey: "lastUpdate",
    header: "Last update",
    cell: ({ row }) => new Date(row.original.lastUpdate).toLocaleString(),
  },
]

type MachinesTableProps = {
  data: Machine[]
  isLoading?: boolean
}

export function MachinesTable({ data, isLoading }: MachinesTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No machine has been connected yet."
      emptyTitle="No machines found"
      isLoading={isLoading}
      searchPlaceholder="Search machines..."
    />
  )
}
