import type { Permission } from "@/shared/constants"

export type AuthUser = {
  id: string
  displayName: string
  email?: string
  roles: string[]
  permissions: Permission[]
}

export type AuthSession = {
  accessToken: string
  refreshToken?: string
  expiresAt?: string
  user: AuthUser
}
