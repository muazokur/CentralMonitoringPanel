import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge, type StatusBadgeStatus } from "@/shared/components/ui"

import type {
  TagValueHistoryItem,
  TagValueQuality,
} from "@/features/tag-value-history/types/tag-value-history.types"

const qualityStatusMap: Record<TagValueQuality, StatusBadgeStatus> = {
  bad: "critical",
  good: "active",
  uncertain: "warning",
}

const columns: ColumnDef<TagValueHistoryItem>[] = [
  {
    accessorKey: "tag",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tag" />,
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
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "quality",
    header: "Quality",
    cell: ({ row }) => (
      <StatusBadge status={qualityStatusMap[row.original.quality]}>
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

type TagValueHistoryTableProps = {
  data: TagValueHistoryItem[]
  isLoading?: boolean
}

export function TagValueHistoryTable({
  data,
  isLoading,
}: TagValueHistoryTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No tag values match the current time range."
      emptyTitle="No tag history found"
      isLoading={isLoading}
      searchPlaceholder="Search tag history..."
    />
  )
}
