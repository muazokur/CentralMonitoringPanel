import { LoaderCircle } from "lucide-react"

import { cn } from "@/shared/lib/utils"

type LoadingStateProps = {
  label?: string
  className?: string
}

export function LoadingState({
  label = "Loading",
  className,
}: LoadingStateProps) {
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
