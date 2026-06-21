import { createContext } from "react"

import type { AuthSession, AuthUser } from "@/shared/types"

export type AuthContextValue = {
  session: AuthSession | null
  user: AuthUser | null
  isAuthenticated: boolean
  setSession: (session: AuthSession) => void
  clearSession: () => void
  hasRole: (role: string) => boolean
  hasPermission: (permission: string) => boolean
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
)
