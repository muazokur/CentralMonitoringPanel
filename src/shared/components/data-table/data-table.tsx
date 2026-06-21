import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type OnChangeFn,
  type PaginationState,
  type Row,
  type SortingState,
} from "@tanstack/react-table"
import { useState, type ReactNode } from "react"

import { DataTableEmpty } from "@/shared/components/data-table/data-table-empty"
import { DataTablePagination } from "@/shared/components/data-table/data-table-pagination"
import { DataTableSkeleton } from "@/shared/components/data-table/data-table-skeleton"
import { DataTableToolbar } from "@/shared/components/data-table/data-table-toolbar"
import { cn } from "@/shared/lib/utils"

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading?: boolean
  emptyTitle?: string
  emptyDescription?: string
  className?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  searchPlaceholder?: string
  pagination?: PaginationState
  onPaginationChange?: OnChangeFn<PaginationState>
  pageCount?: number
  sorting?: SortingState
  onSortingChange?: OnChangeFn<SortingState>
  columnFilters?: ColumnFiltersState
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>
  toolbarActions?: ReactNode
  toolbarFilters?: ReactNode
  onRowClick?: (row: Row<TData>) => void
  getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string
  enablePagination?: boolean
  enableSearch?: boolean
  manualPagination?: boolean
  manualSorting?: boolean
  manualFiltering?: boolean
  totalRowCount?: number
  loadingRowCount?: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading = false,
  emptyTitle = "No records found",
  emptyDescription = "There is no data available for the current filters.",
  className,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search records...",
  pagination,
  onPaginationChange,
  pageCount,
  sorting,
  onSortingChange,
  columnFilters,
  onColumnFiltersChange,
  toolbarActions,
  toolbarFilters,
  onRowClick,
  getRowId,
  enablePagination = true,
  enableSearch = true,
  manualPagination = pageCount !== undefined,
  manualSorting = false,
  manualFiltering = false,
  totalRowCount,
  loadingRowCount = 8,
}: DataTableProps<TData, TValue>) {
  const [internalSorting, setInternalSorting] = useState<SortingState>([])
  const [internalColumnFilters, setInternalColumnFilters] =
    useState<ColumnFiltersState>([])
  const [internalPagination, setInternalPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [internalSearchValue, setInternalSearchValue] = useState("")

  const tableSorting = sorting ?? internalSorting
  const tableColumnFilters = columnFilters ?? internalColumnFilters
  const tablePagination = pagination ?? internalPagination
  const tableSearchValue = searchValue ?? internalSearchValue
  const handleSearchChange = onSearchChange ?? setInternalSearchValue

  // TanStack Table exposes callback getters that React Compiler cannot memoize safely.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    columns,
    data,
    state: {
      sorting: tableSorting,
      columnFilters: tableColumnFilters,
      pagination: tablePagination,
      globalFilter: tableSearchValue,
    },
    pageCount,
    getRowId,
    manualFiltering,
    manualPagination,
    manualSorting,
    onColumnFiltersChange: onColumnFiltersChange ?? setInternalColumnFilters,
    onGlobalFilterChange: handleSearchChange,
    onPaginationChange: onPaginationChange ?? setInternalPagination,
    onSortingChange: onSortingChange ?? setInternalSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: getSortedRowModel(),
  })

  const colSpan = Math.max(columns.length, 1)
  const hasRows = table.getRowModel().rows.length > 0

  return (
    <div
      className={cn("overflow-hidden rounded-lg border bg-card shadow-card", className)}
    >
      <DataTableToolbar
        actions={toolbarActions}
        enableSearch={enableSearch}
        filters={toolbarFilters}
        onSearchChange={handleSearchChange}
        searchPlaceholder={searchPlaceholder}
        searchValue={tableSearchValue}
      />

      {isLoading ? (
        <DataTableSkeleton
          columnCount={columns.length}
          rowCount={loadingRowCount}
        />
      ) : (
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
              {hasRows ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    className={cn(
                      "border-b transition-colors hover:bg-muted/40 last:border-b-0",
                      onRowClick && "cursor-pointer",
                    )}
                    key={row.id}
                    onClick={() => onRowClick?.(row)}
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
                  <td colSpan={colSpan}>
                    <DataTableEmpty
                      description={emptyDescription}
                      title={emptyTitle}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {enablePagination && !isLoading ? (
        <DataTablePagination table={table} totalRowCount={totalRowCount} />
      ) : null}
    </div>
  )
}
