import type { ComponentProps, ReactNode } from "react"
import { Inbox } from "lucide-react"

import { Button, Card } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

type EmptyStateProps = {
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <Card
      className={cn(
        "flex min-h-48 flex-col items-center justify-center border-dashed p-6 text-center shadow-none",
        className,
      )}
    >
      <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
        <Inbox className="size-5" aria-hidden="true" />
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

export function EmptyStateAction({
  children,
  ...props
}: ComponentProps<typeof Button>) {
  return <Button {...props}>{children}</Button>
}
