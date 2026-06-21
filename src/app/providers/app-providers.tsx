import type { ReactNode } from "react"

import { QueryProvider } from "@/app/providers/query-provider"
import { AuthProvider } from "@/shared/auth"

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  )
}
