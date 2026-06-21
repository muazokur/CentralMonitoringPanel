import type { ReactNode } from "react"

import { QueryProvider } from "@/app/providers/query-provider"
import { ToastProvider } from "@/shared/components/ui"
import { AuthProvider } from "@/shared/auth"
import { ThemeProvider } from "@/shared/theme"

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
