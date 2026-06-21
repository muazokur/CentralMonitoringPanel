import { createContext } from "react"

import type { Permission } from "@/shared/constants"
import type { AuthSession, AuthUser } from "@/shared/types"

export type AuthContextValue = {
  session: AuthSession | null
  user: AuthUser | null
  isAuthenticated: boolean
  setSession: (session: AuthSession) => void
  clearSession: () => void
  hasRole: (role: string) => boolean
  hasPermission: (permission: Permission) => boolean
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
)
