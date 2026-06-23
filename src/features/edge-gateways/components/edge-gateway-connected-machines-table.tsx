import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge, type StatusBadgeStatus } from "@/shared/components/ui"

import type {
  EdgeGatewayConnectedMachine,
} from "@/features/edge-gateways/types/edge-gateway.types"

const statusMap: Record<EdgeGatewayConnectedMachine["status"], StatusBadgeStatus> = {
  active: "active",
  critical: "critical",
  inactive: "inactive",
  warning: "warning",
}

const stateMap: Record<EdgeGatewayConnectedMachine["currentState"], StatusBadgeStatus> = {
  idle: "pending",
  maintenance: "warning",
  running: "active",
  stopped: "critical",
}

const columns: ColumnDef<EdgeGatewayConnectedMachine>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Machine" />,
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={statusMap[row.original.status]} />,
  },
  {
    accessorKey: "currentState",
    header: "State",
    cell: ({ row }) => (
      <StatusBadge status={stateMap[row.original.currentState]}>
        {row.original.currentState}
      </StatusBadge>
    ),
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

type EdgeGatewayConnectedMachinesTableProps = {
  data: EdgeGatewayConnectedMachine[]
}

export function EdgeGatewayConnectedMachinesTable({
  data,
}: EdgeGatewayConnectedMachinesTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="This gateway has no connected machines."
      emptyTitle="No connected machines"
      searchPlaceholder="Search connected machines..."
    />
  )
}
