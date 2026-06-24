import type { StatusTone } from "@/shared/constants"
import { cn } from "@/shared/lib/utils"

type ProgressBarProps = {
  value: number
  tone?: StatusTone
  label?: string
  className?: string
}

const toneClasses: Record<StatusTone, string> = {
  danger: "bg-status-danger",
  info: "bg-status-info",
  neutral: "bg-muted-foreground",
  success: "bg-status-success",
  warning: "bg-status-warning",
}

export function ProgressBar({
  value,
  tone = "neutral",
  label,
  className,
}: ProgressBarProps) {
  const normalizedValue = Math.min(100, Math.max(0, value))

  return (
    <div
      aria-label={label}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={normalizedValue}
      className={cn("h-2 overflow-hidden rounded-full bg-muted", className)}
      role="progressbar"
    >
      <div
        className={cn("h-full rounded-full", toneClasses[tone])}
        style={{ width: `${normalizedValue}%` }}
      />
    </div>
  )
}
