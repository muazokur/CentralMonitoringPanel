import type { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import { useMemo } from "react"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { Button } from "@/shared/components/ui"

import {
  DataReceiveStatusBadge,
  EdgeGatewayStatusBadge,
} from "@/features/edge-gateways/components/edge-gateway-status-badge"
import type { EdgeGateway } from "@/features/edge-gateways/types/edge-gateway.types"

function getColumns(
  onViewDetail?: (gatewayId: string) => void,
): ColumnDef<EdgeGateway>[] {
  return [
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

type EdgeGatewaysTableProps = {
  data: EdgeGateway[]
  isLoading?: boolean
  onRowClick?: (gateway: EdgeGateway) => void
  onViewDetail?: (gatewayId: string) => void
}

export function EdgeGatewaysTable({
  data,
  isLoading,
  onRowClick,
  onViewDetail,
}: EdgeGatewaysTableProps) {
  const columns = useMemo(() => getColumns(onViewDetail), [onViewDetail])

  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No edge gateway has been registered yet."
      emptyTitle="No gateways found"
      isLoading={isLoading}
      onRowClick={(row) => onRowClick?.(row.original)}
      searchPlaceholder="Search gateways..."
    />
  )
}
