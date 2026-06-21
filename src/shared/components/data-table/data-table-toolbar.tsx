import { Search, X } from "lucide-react"
import type { ReactNode } from "react"

import { Button, Input } from "@/shared/components/ui"

type DataTableToolbarProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  enableSearch?: boolean
  filters?: ReactNode
  actions?: ReactNode
}

export function DataTableToolbar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search records...",
  enableSearch = true,
  filters,
  actions,
}: DataTableToolbarProps) {
  if (!enableSearch && !filters && !actions) {
    return null
  }

  return (
    <div className="flex flex-col gap-3 border-b bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        {enableSearch ? (
          <div className="relative w-full sm:max-w-sm">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              className="pr-10 pl-9"
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder={searchPlaceholder}
              value={searchValue}
            />
            {searchValue ? (
              <Button
                aria-label="Clear search"
                className="absolute right-1 top-1/2 size-8 -translate-y-1/2"
                onClick={() => onSearchChange("")}
                size="icon"
                variant="ghost"
              >
                <X className="size-4" />
              </Button>
            ) : null}
          </div>
        ) : null}
        {filters ? <div className="flex flex-wrap items-center gap-2">{filters}</div> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  )
}
