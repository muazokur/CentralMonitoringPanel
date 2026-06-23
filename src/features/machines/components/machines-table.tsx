import type { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import { useMemo } from "react"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { Button } from "@/shared/components/ui"

import {
  MachineStateBadge,
  MachineStatusBadge,
} from "@/features/machines/components/machine-status-badge"
import type { Machine } from "@/features/machines/types/machine.types"

function getColumns(onViewDetail?: (machineId: string) => void): ColumnDef<Machine>[] {
  return [
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
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <Button
          aria-label={`View ${row.original.name}`}
          onClick={(event) => {
            event.stopPropagation()
            onViewDetail?.(row.original.id)
          }}
          size="sm"
          variant="outline"
        >
          <Eye aria-hidden="true" />
          View
        </Button>
      ),
    },
  ]
}

type MachinesTableProps = {
  data: Machine[]
  isLoading?: boolean
  onRowClick?: (machine: Machine) => void
  onViewDetail?: (machineId: string) => void
}

export function MachinesTable({
  data,
  isLoading,
  onRowClick,
  onViewDetail,
}: MachinesTableProps) {
  const columns = useMemo(() => getColumns(onViewDetail), [onViewDetail])

  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No machine has been connected yet."
      emptyTitle="No machines found"
      isLoading={isLoading}
      onRowClick={(row) => onRowClick?.(row.original)}
      searchPlaceholder="Search machines..."
    />
  )
}
