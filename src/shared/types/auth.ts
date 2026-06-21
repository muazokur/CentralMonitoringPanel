export type AuthUser = {
  id: string
  displayName: string
  email?: string
  roles: string[]
  permissions: string[]
}

export type AuthSession = {
  accessToken: string
  refreshToken?: string
  expiresAt?: string
  user: AuthUser
}
