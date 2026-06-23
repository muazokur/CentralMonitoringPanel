import type { ColumnDef } from "@tanstack/react-table"

import { DataTable } from "@/shared/components/data-table"
import { StatusBadge } from "@/shared/components/ui"

import type { EdgeGatewayAlert } from "@/features/edge-gateways/types/edge-gateway.types"

const columns: ColumnDef<EdgeGatewayAlert>[] = [
  {
    accessorKey: "severity",
    header: "Severity",
    cell: ({ row }) => <StatusBadge status={row.original.severity} />,
  },
  {
    accessorKey: "machine",
    header: "Machine",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
  },
]

type EdgeGatewayAlertsTableProps = {
  data: EdgeGatewayAlert[]
}

export function EdgeGatewayAlertsTable({ data }: EdgeGatewayAlertsTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No gateway related alerts are active."
      emptyTitle="No alerts"
      searchPlaceholder="Search alerts..."
    />
  )
}
