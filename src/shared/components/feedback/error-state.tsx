import type { ReactNode } from "react"
import { AlertTriangle } from "lucide-react"

import { Card } from "@/shared/components/ui"
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
    <Card
      className={cn(
        "flex min-h-48 flex-col items-center justify-center p-6 text-center shadow-none",
        className,
      )}
      role="alert"
    >
      <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-status-danger/10 text-status-danger">
        <AlertTriangle className="size-5" aria-hidden="true" />
      </div>
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      {description ? (
        <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </Card>
  )
}
