import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge } from "@/shared/components/ui"

import type { Report, ReportStatus } from "@/features/reports/types/report.types"

const reportStatusMap: Record<ReportStatus, "active" | "pending" | "critical"> = {
  failed: "critical",
  pending: "pending",
  ready: "active",
}

const columns: ColumnDef<Report>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Report" />
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "period",
    header: "Period",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <StatusBadge status={reportStatusMap[row.original.status]}>
        {row.original.status}
      </StatusBadge>
    ),
  },
  {
    accessorKey: "generatedAt",
    header: "Generated",
    cell: ({ row }) => new Date(row.original.generatedAt).toLocaleString(),
  },
]

type ReportsTableProps = {
  data: Report[]
  isLoading?: boolean
}

export function ReportsTable({ data, isLoading }: ReportsTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No reports have been generated yet."
      emptyTitle="No reports found"
      isLoading={isLoading}
      searchPlaceholder="Search reports..."
    />
  )
}
