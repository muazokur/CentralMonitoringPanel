import { Circle } from "lucide-react"
import type { ComponentProps } from "react"

import type { StatusTone } from "@/shared/constants"
import { cn } from "@/shared/lib/utils"

const toneClasses: Record<StatusTone, string> = {
  neutral: "border-border bg-muted text-muted-foreground",
  success:
    "border-status-success/25 bg-status-success/10 text-status-success",
  warning:
    "border-status-warning/25 bg-status-warning/15 text-status-warning",
  info: "border-status-info/25 bg-status-info/10 text-status-info",
  danger: "border-status-danger/25 bg-status-danger/10 text-status-danger",
}

type StatusBadgeProps = ComponentProps<"span"> & {
  tone?: StatusTone
  withDot?: boolean
}

export function StatusBadge({
  className,
  tone = "neutral",
  withDot = true,
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-1.5 rounded-md border px-2 text-xs font-medium",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {withDot ? <Circle className="size-2 fill-current" /> : null}
      {children}
    </span>
  )
}
