import { env } from "@/app/config/env"
import { API_ENDPOINTS, apiGet, apiPost } from "@/shared/api"
import { ALL_PERMISSIONS } from "@/shared/constants"
import { getStoredAuthSession } from "@/shared/auth"
import type { AuthSession, AuthUser } from "@/shared/types"
import type { LoginRequest, LoginResponse } from "@/features/auth/types/auth.types"

const MOCK_DELAY_MS = 450

function wait(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function createMockSession({ email }: LoginRequest): AuthSession {
  const displayName = email
    .split("@")[0]
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ")

  return {
    accessToken: `mock-access-token-${crypto.randomUUID()}`,
    refreshToken: `mock-refresh-token-${crypto.randomUUID()}`,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    user: {
      id: crypto.randomUUID(),
      displayName: displayName || "Operations User",
      email,
      roles: ["Administrator"],
      permissions: ALL_PERMISSIONS,
    },
  }
}

export async function login(request: LoginRequest): Promise<LoginResponse> {
  if (env.apiBaseUrl) {
    return apiPost<LoginResponse, LoginRequest>(API_ENDPOINTS.auth.login, request)
  }

  await wait(MOCK_DELAY_MS)

  return createMockSession(request)
}

export async function logout() {
  if (env.apiBaseUrl) {
    await apiPost<void>(API_ENDPOINTS.auth.logout)
    return
  }

  await wait(150)
}

export async function getCurrentUser(): Promise<AuthUser> {
  if (env.apiBaseUrl) {
    return apiGet<AuthUser>(API_ENDPOINTS.auth.currentUser)
  }

  const session = getStoredAuthSession()

  if (!session) {
    throw new Error("No active auth session.")
  }

  return session.user
}
