import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge, type StatusBadgeStatus } from "@/shared/components/ui"

import type {
  TagRecentHistoryItem,
  TagValueQuality,
} from "@/features/tags/types/tag.types"

const qualityStatusMap: Record<TagValueQuality, StatusBadgeStatus> = {
  bad: "critical",
  good: "active",
  uncertain: "warning",
}

const columns: ColumnDef<TagRecentHistoryItem>[] = [
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Timestamp" />
    ),
    cell: ({ row }) => new Date(row.original.timestamp).toLocaleString(),
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
]

type TagRecentHistoryTableProps = {
  data: TagRecentHistoryItem[]
  isLoading?: boolean
}

export function TagRecentHistoryTable({
  data,
  isLoading,
}: TagRecentHistoryTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No recent values are available for this tag."
      emptyTitle="No recent values"
      enableSearch={false}
      isLoading={isLoading}
    />
  )
}
