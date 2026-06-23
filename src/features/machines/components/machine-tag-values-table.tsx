import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge, type StatusBadgeStatus } from "@/shared/components/ui"

import type {
  MachineLatestTagValue,
  MachineTagValueQuality,
} from "@/features/machines/types/machine.types"

const qualityMap: Record<MachineTagValueQuality, StatusBadgeStatus> = {
  bad: "critical",
  good: "active",
  uncertain: "warning",
}

const columns: ColumnDef<MachineLatestTagValue>[] = [
  {
    accessorKey: "tag",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tag" />,
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

type MachineTagValuesTableProps = {
  data: MachineLatestTagValue[]
}

export function MachineTagValuesTable({ data }: MachineTagValuesTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No latest tag values are available."
      emptyTitle="No tag values"
      searchPlaceholder="Search tag values..."
    />
  )
}
