import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import {
  AuthContext,
  type AuthContextValue,
} from "@/shared/auth/auth-context"
import {
  clearStoredAuthSession,
  getStoredAuthSession,
  setStoredAuthSession,
} from "@/shared/auth/auth-storage"
import type { AuthSession } from "@/shared/types"

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSessionState] = useState<AuthSession | null>(() =>
    getStoredAuthSession(),
  )

  const setSession = useCallback((nextSession: AuthSession) => {
    setStoredAuthSession(nextSession)
    setSessionState(nextSession)
  }, [])

  const clearSession = useCallback(() => {
    clearStoredAuthSession()
    setSessionState(null)
  }, [])

  const hasRole = useCallback(
    (role: string) => Boolean(session?.user.roles.includes(role)),
    [session],
  )

  const hasPermission = useCallback(
    (permission: string) =>
      Boolean(session?.user.permissions.includes(permission)),
    [session],
  )

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: session?.user ?? null,
      isAuthenticated: Boolean(session?.accessToken),
      setSession,
      clearSession,
      hasRole,
      hasPermission,
    }),
    [clearSession, hasPermission, hasRole, session, setSession],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
