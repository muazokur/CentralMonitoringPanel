import type { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import { useMemo } from "react"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { PermissionGuard } from "@/shared/auth"
import { Button, StatusBadge } from "@/shared/components/ui"
import { PERMISSIONS } from "@/shared/constants"

import type { Alert } from "@/features/alerts/types/alert.types"

function getColumns(onReviewAlert?: (alert: Alert) => void): ColumnDef<Alert>[] {
  return [
    {
      accessorKey: "severity",
      header: "Severity",
      cell: ({ row }) => <StatusBadge status={row.original.severity} />,
    },
    {
      accessorKey: "machine",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Machine" />
      ),
    },
    {
      accessorKey: "tag",
      header: "Tag",
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
    {
      accessorKey: "resolvedAt",
      header: "Resolved",
      cell: ({ row }) =>
        row.original.resolvedAt
          ? new Date(row.original.resolvedAt).toLocaleString()
          : "-",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <PermissionGuard
          fallback={<span className="text-sm text-muted-foreground">-</span>}
          permission={PERMISSIONS.alertsManage}
        >
          <Button
            aria-label={`Review alert ${row.original.id}`}
            onClick={(event) => {
              event.stopPropagation()
              onReviewAlert?.(row.original)
            }}
            size="sm"
            variant="outline"
          >
            <Eye aria-hidden="true" />
            Review
          </Button>
        </PermissionGuard>
      ),
    },
  ]
}

type AlertsTableProps = {
  data: Alert[]
  isLoading?: boolean
  onReviewAlert?: (alert: Alert) => void
  onRowClick?: (alert: Alert) => void
}

export function AlertsTable({
  data,
  isLoading,
  onReviewAlert,
  onRowClick,
}: AlertsTableProps) {
  const columns = useMemo(() => getColumns(onReviewAlert), [onReviewAlert])

  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No alerts match the current filters."
      emptyTitle="No alerts found"
      isLoading={isLoading}
      onRowClick={(row) => onRowClick?.(row.original)}
      searchPlaceholder="Search alerts..."
    />
  )
}
