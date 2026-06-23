import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge, type StatusBadgeStatus } from "@/shared/components/ui"

import type {
  EdgeGatewayRecentTagValue,
  EdgeGatewayTagValueQuality,
} from "@/features/edge-gateways/types/edge-gateway.types"

const qualityMap: Record<EdgeGatewayTagValueQuality, StatusBadgeStatus> = {
  bad: "critical",
  good: "active",
  uncertain: "warning",
}

const columns: ColumnDef<EdgeGatewayRecentTagValue>[] = [
  {
    accessorKey: "tag",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tag" />,
  },
  {
    accessorKey: "machine",
    header: "Machine",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "quality",
    header: "Quality",
    cell: ({ row }) => (
      <StatusBadge status={qualityMap[row.original.quality]}>
        {row.original.quality}
      </StatusBadge>
    ),
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => new Date(row.original.timestamp).toLocaleString(),
  },
]

type EdgeGatewayTagValuesTableProps = {
  data: EdgeGatewayRecentTagValue[]
}

export function EdgeGatewayTagValuesTable({
  data,
}: EdgeGatewayTagValuesTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No recent tag values have been received."
      emptyTitle="No tag values"
      searchPlaceholder="Search tag values..."
    />
  )
}
