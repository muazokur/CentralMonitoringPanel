import { env } from "@/app/config/env"

export function FoundationPage() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex min-h-svh w-full max-w-6xl items-center px-6 py-12">
        <section className="max-w-2xl space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            {env.appName}
          </p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Foundation
          </h1>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Ready for the design system and feature prompts.
          </p>
        </section>
      </div>
    </main>
  )
}
