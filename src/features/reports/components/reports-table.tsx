import type { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge } from "@/shared/components/ui"

import { ReportExportActions } from "@/features/reports/components/report-export-actions"
import type {
  Report,
  ReportExportFormat,
  ReportStatus,
} from "@/features/reports/types/report.types"

const reportStatusMap: Record<ReportStatus, "active" | "pending" | "critical"> = {
  failed: "critical",
  pending: "pending",
  ready: "active",
}

function getColumns(
  onExport?: (report: Report, format: ReportExportFormat) => void,
  isExporting?: (reportId: string, format: ReportExportFormat) => boolean,
): ColumnDef<Report>[] {
  return [
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
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <ReportExportActions
          isExporting={isExporting}
          onExport={onExport}
          report={row.original}
        />
      ),
    },
  ]
}

type ReportsTableProps = {
  data: Report[]
  isLoading?: boolean
  onExport?: (report: Report, format: ReportExportFormat) => void
  isExporting?: (reportId: string, format: ReportExportFormat) => boolean
}

export function ReportsTable({
  data,
  isLoading,
  onExport,
  isExporting,
}: ReportsTableProps) {
  const columns = useMemo(
    () => getColumns(onExport, isExporting),
    [isExporting, onExport],
  )

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
