import { Skeleton } from "@/shared/components/ui"

type DataTableSkeletonProps = {
  columnCount?: number
  rowCount?: number
}

export function DataTableSkeleton({
  columnCount = 5,
  rowCount = 8,
}: DataTableSkeletonProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[720px]">
        <div
          className="grid border-y bg-muted/70 px-4 py-3"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: columnCount }).map((_, index) => (
            <Skeleton className="h-4 w-24" key={index} />
          ))}
        </div>
        <div className="divide-y">
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <div
              className="grid px-4 py-4"
              key={rowIndex}
              style={{
                gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: columnCount }).map((_, columnIndex) => (
                <Skeleton className="h-4 w-28" key={columnIndex} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
