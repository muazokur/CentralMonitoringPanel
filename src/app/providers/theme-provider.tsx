import type { ReactNode } from "react"

import { ThemeProvider as SharedThemeProvider } from "@/shared/theme"

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <SharedThemeProvider>{children}</SharedThemeProvider>
}
