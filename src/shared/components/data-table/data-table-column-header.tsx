import type { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"
import type { ReactNode } from "react"

import { Button } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

type DataTableColumnHeaderProps<TData, TValue> = {
  column: Column<TData, TValue>
  title: ReactNode
  className?: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn("truncate", className)}>{title}</div>
  }

  const sorting = column.getIsSorted()

  return (
    <Button
      className={cn(
        "-ml-3 h-8 px-3 text-xs font-semibold uppercase text-muted-foreground hover:text-foreground",
        className,
      )}
      onClick={() => column.toggleSorting(sorting === "asc")}
      variant="ghost"
    >
      <span className="truncate">{title}</span>
      {sorting === "desc" ? (
        <ArrowDown className="size-3.5" />
      ) : sorting === "asc" ? (
        <ArrowUp className="size-3.5" />
      ) : (
        <ChevronsUpDown className="size-3.5" />
      )}
    </Button>
  )
}
