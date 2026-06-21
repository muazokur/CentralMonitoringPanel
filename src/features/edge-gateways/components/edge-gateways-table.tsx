import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"

import {
  DataReceiveStatusBadge,
  EdgeGatewayStatusBadge,
} from "@/features/edge-gateways/components/edge-gateway-status-badge"
import type { EdgeGateway } from "@/features/edge-gateways/types/edge-gateway.types"

const columns: ColumnDef<EdgeGateway>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gateway" />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <EdgeGatewayStatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "ipAddress",
    header: "IP address",
  },
  {
    accessorKey: "connectedMachineCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Machines" />
    ),
  },
  {
    accessorKey: "dataReceiveStatus",
    header: "Data",
    cell: ({ row }) => (
      <DataReceiveStatusBadge status={row.original.dataReceiveStatus} />
    ),
  },
  {
    accessorKey: "lastHeartbeat",
    header: "Last heartbeat",
    cell: ({ row }) => new Date(row.original.lastHeartbeat).toLocaleString(),
  },
]

type EdgeGatewaysTableProps = {
  data: EdgeGateway[]
  isLoading?: boolean
}

export function EdgeGatewaysTable({ data, isLoading }: EdgeGatewaysTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No edge gateway has been registered yet."
      emptyTitle="No gateways found"
      isLoading={isLoading}
      searchPlaceholder="Search gateways..."
    />
  )
}
