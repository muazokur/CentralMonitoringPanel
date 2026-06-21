import type { LucideIcon } from "lucide-react"
import { Link } from "react-router"

import { ROUTE_PATHS } from "@/app/router/route-paths"
import { Card, CardContent, StatusBadge } from "@/shared/components/ui"

type ErrorPageShellProps = {
  code: string
  title: string
  description: string
  tone: "warning" | "danger" | "info"
  icon: LucideIcon
}

export function ErrorPageShell({
  code,
  title,
  description,
  tone,
  icon: Icon,
}: ErrorPageShellProps) {
  return (
    <main className="flex min-h-svh items-center justify-center bg-surface px-4 py-10">
      <Card className="w-full max-w-xl">
        <CardContent className="p-6 sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Icon className="size-6" aria-hidden="true" />
            </div>
            <StatusBadge tone={tone}>{code}</StatusBadge>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-normal text-foreground">
              {title}
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none"
              to={ROUTE_PATHS.dashboard}
            >
              Back to dashboard
            </Link>
            <Link
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none"
              to={ROUTE_PATHS.login}
            >
              Go to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
