import type { ColumnDef } from "@tanstack/react-table"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { StatusBadge } from "@/shared/components/ui"

import type { Alert } from "@/features/alerts/types/alert.types"

const columns: ColumnDef<Alert>[] = [
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
]

type AlertsTableProps = {
  data: Alert[]
  isLoading?: boolean
}

export function AlertsTable({ data, isLoading }: AlertsTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No alerts match the current filters."
      emptyTitle="No alerts found"
      isLoading={isLoading}
      searchPlaceholder="Search alerts..."
    />
  )
}
