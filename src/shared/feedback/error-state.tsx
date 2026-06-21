import type { ReactNode } from "react"
import { AlertTriangle } from "lucide-react"

import { cn } from "@/shared/lib/utils"

type ErrorStateProps = {
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function ErrorState({
  title,
  description,
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-48 flex-col items-center justify-center rounded-lg border bg-background p-6 text-center",
        className,
      )}
      role="alert"
    >
      <AlertTriangle
        className="mb-3 size-8 text-destructive"
        aria-hidden="true"
      />
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      {description ? (
        <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  )
}
