import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"

import { EmptyState } from "@/shared/components/feedback"
import { cn } from "@/shared/lib/utils"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  emptyTitle?: string
  emptyDescription?: string
  className?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  emptyTitle = "No records found",
  emptyDescription = "There is no data available for the current filters.",
  className,
}: DataTableProps<TData, TValue>) {
  // TanStack Table exposes callback getters that React Compiler cannot memoize safely.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className={cn("overflow-hidden rounded-lg border bg-card shadow-card", className)}>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[720px] caption-bottom text-sm">
          <thead className="bg-muted/70">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="border-b" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="h-11 px-4 text-left align-middle text-xs font-semibold uppercase text-muted-foreground"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  className="border-b transition-colors hover:bg-muted/40 last:border-b-0"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td className="h-12 px-4 align-middle" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length}>
                  <EmptyState
                    className="m-4 border-0 shadow-none"
                    description={emptyDescription}
                    title={emptyTitle}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
