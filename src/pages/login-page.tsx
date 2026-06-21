import { Factory, ShieldCheck } from "lucide-react"

import { appConfig } from "@/app/config/app-config"
import { LoginForm } from "@/features/auth/components/login-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

export function LoginPage() {
  return (
    <main className="min-h-svh bg-surface">
      <div className="mx-auto grid min-h-svh w-full max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-[1fr_26rem] lg:px-8">
        <section className="hidden space-y-6 lg:block">
          <div className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Factory className="size-6" aria-hidden="true" />
          </div>
          <div className="max-w-2xl space-y-3">
            <StatusBadge tone="info">Industrial IoT Platform</StatusBadge>
            <h1 className="text-3xl font-semibold tracking-normal text-foreground">
              Monitor operations with a secure control-plane foundation.
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
              Sign in to access dashboards, gateways, machines, tag history,
              OEE analytics and administration tools.
            </p>
          </div>
          <div className="flex max-w-xl items-start gap-3 rounded-lg border bg-card p-4 shadow-card">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-status-success"
              aria-hidden="true"
            />
            <p className="text-sm leading-6 text-muted-foreground">
              This frontend is ready for role and permission based access.
              Mock login is enabled until the backend auth endpoints are wired.
            </p>
          </div>
        </section>

        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground lg:hidden">
              <Factory className="size-5" aria-hidden="true" />
            </div>
            <CardTitle>{appConfig.name}</CardTitle>
            <CardDescription>{appConfig.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
