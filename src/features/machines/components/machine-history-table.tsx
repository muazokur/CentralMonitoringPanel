import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge, type StatusBadgeStatus } from "@/shared/components/ui"

import type { MachineHistoryItem } from "@/features/machines/types/machine.types"

const stateMap: Record<MachineHistoryItem["state"], StatusBadgeStatus> = {
  idle: "pending",
  maintenance: "warning",
  running: "active",
  stopped: "critical",
}

const columns: ColumnDef<MachineHistoryItem>[] = [
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Timestamp" />
    ),
    cell: ({ row }) => new Date(row.original.timestamp).toLocaleString(),
  },
  {
    accessorKey: "state",
    header: "State",
    cell: ({ row }) => (
      <StatusBadge status={stateMap[row.original.state]}>
        {row.original.state}
      </StatusBadge>
    ),
  },
  {
    accessorKey: "event",
    header: "Event",
  },
  {
    accessorKey: "oee",
    header: ({ column }) => <DataTableColumnHeader column={column} title="OEE" />,
    cell: ({ row }) => `${row.original.oee.toFixed(1)}%`,
  },
  {
    accessorKey: "durationMinutes",
    header: "Duration",
    cell: ({ row }) => `${row.original.durationMinutes} min`,
  },
]

type MachineHistoryTableProps = {
  data: MachineHistoryItem[]
}

export function MachineHistoryTable({ data }: MachineHistoryTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No machine history is available."
      emptyTitle="No history"
      searchPlaceholder="Search history..."
    />
  )
}
