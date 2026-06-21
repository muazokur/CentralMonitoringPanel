import { LoaderCircle } from "lucide-react"

import { Skeleton } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

type LoadingStateProps = {
  label?: string
  className?: string
  variant?: "spinner" | "skeleton"
}

export function LoadingState({
  label = "Loading",
  className,
  variant = "spinner",
}: LoadingStateProps) {
  if (variant === "skeleton") {
    return (
      <div className={cn("space-y-3 rounded-lg border bg-card p-4", className)}>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex min-h-48 items-center justify-center gap-2 text-sm text-muted-foreground",
        className,
      )}
      role="status"
    >
      <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}
