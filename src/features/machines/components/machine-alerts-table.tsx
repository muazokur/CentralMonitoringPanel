import type { ColumnDef } from "@tanstack/react-table"

import { DataTable } from "@/shared/components/data-table"
import { StatusBadge } from "@/shared/components/ui"

import type { MachineAlert } from "@/features/machines/types/machine.types"

const columns: ColumnDef<MachineAlert>[] = [
  {
    accessorKey: "severity",
    header: "Severity",
    cell: ({ row }) => <StatusBadge status={row.original.severity} />,
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
]

type MachineAlertsTableProps = {
  data: MachineAlert[]
}

export function MachineAlertsTable({ data }: MachineAlertsTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No machine alerts are active."
      emptyTitle="No alerts"
      searchPlaceholder="Search alerts..."
    />
  )
}
