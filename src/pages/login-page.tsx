import { Factory } from "lucide-react"

import { appConfig } from "@/app/config/app-config"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui"
import { EmptyState } from "@/shared/components/feedback"

export function LoginPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-surface px-4 py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Factory className="size-5" aria-hidden="true" />
          </div>
          <CardTitle>{appConfig.name}</CardTitle>
          <CardDescription>{appConfig.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            className="min-h-44 shadow-none"
            description="Authentication UI and backend login flow will be connected in a later prompt."
            title="Login shell ready"
          />
        </CardContent>
      </Card>
    </main>
  )
}
