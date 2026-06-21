import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import { STORAGE_KEYS } from "@/shared/constants"
import {
  ThemeContext,
  type Theme,
  type ThemeContextValue,
} from "@/shared/theme/theme-context"

type ThemeProviderProps = {
  children: ReactNode
}

function getSystemTheme(): Exclude<Theme, "system"> {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark"
  }

  return "light"
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "system"
  }

  const theme = window.localStorage.getItem(STORAGE_KEYS.theme)

  return theme === "light" || theme === "dark" || theme === "system"
    ? theme
    : "system"
}

function applyTheme(resolvedTheme: Exclude<Theme, "system">) {
  document.documentElement.classList.toggle("dark", resolvedTheme === "dark")
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme())
  const [systemTheme, setSystemTheme] =
    useState<Exclude<Theme, "system">>(() => getSystemTheme())
  const resolvedTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    applyTheme(resolvedTheme)
    window.localStorage.setItem(STORAGE_KEYS.theme, theme)
  }, [resolvedTheme, theme])

  useEffect(() => {
    if (theme !== "system") {
      return undefined
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => setSystemTheme(getSystemTheme())

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((currentTheme) => {
      const currentResolved =
        currentTheme === "system" ? getSystemTheme() : currentTheme

      return currentResolved === "dark" ? "light" : "dark"
    })
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [resolvedTheme, setTheme, theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
