import type { ReactNode } from "react"

import { AuthProvider } from "@/app/providers/auth-provider"
import { QueryProvider } from "@/app/providers/query-provider"
import { ThemeProvider } from "@/app/providers/theme-provider"
import { ToastProvider } from "@/shared/components/ui"

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>
          <ToastProvider>{children}</ToastProvider>
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
