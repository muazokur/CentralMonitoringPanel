import type { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import { useMemo } from "react"

import {
  DataTable,
  DataTableColumnHeader,
} from "@/shared/components/data-table"
import { Button, StatusBadge } from "@/shared/components/ui"

import type { PlcTag } from "@/features/tags/types/tag.types"

function getColumns(onViewDetail?: (tagId: string) => void): ColumnDef<PlcTag>[] {
  return [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tag" />
      ),
    },
    {
      accessorKey: "code",
      header: "Code",
    },
    {
      accessorKey: "dataType",
      header: "Type",
    },
    {
      accessorKey: "unit",
      header: "Unit",
      cell: ({ row }) => row.original.unit || "-",
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
      accessorKey: "isActive",
      header: "Status",
      cell: ({ row }) => (
        <StatusBadge status={row.original.isActive ? "active" : "inactive"} />
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <Button
          aria-label={`View ${row.original.name}`}
          onClick={(event) => {
            event.stopPropagation()
            onViewDetail?.(row.original.id)
          }}
          size="sm"
          variant="outline"
        >
          <Eye aria-hidden="true" />
          View
        </Button>
      ),
    },
  ]
}

type TagsTableProps = {
  data: PlcTag[]
  isLoading?: boolean
  onRowClick?: (tag: PlcTag) => void
  onViewDetail?: (tagId: string) => void
}

export function TagsTable({
  data,
  isLoading,
  onRowClick,
  onViewDetail,
}: TagsTableProps) {
  const columns = useMemo(() => getColumns(onViewDetail), [onViewDetail])

  return (
    <DataTable
      columns={columns}
      data={data}
      emptyDescription="No PLC tags are available for the current filters."
      emptyTitle="No tags found"
      isLoading={isLoading}
      onRowClick={(row) => onRowClick?.(row.original)}
      searchPlaceholder="Search tags..."
    />
  )
}
