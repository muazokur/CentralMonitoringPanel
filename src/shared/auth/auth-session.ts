import { STORAGE_KEYS, type Permission } from "@/shared/constants"
import {
  clearStoredTokens,
  setAccessToken,
  setRefreshToken,
} from "@/shared/auth/token-storage"
import { isRecord, isStringArray } from "@/shared/lib/guards"
import type { AuthSession, AuthUser } from "@/shared/types"

function canUseStorage() {
  return typeof window !== "undefined" && Boolean(window.localStorage)
}

function isPermissionArray(value: unknown): value is Permission[] {
  return isStringArray(value)
}

function isAuthUser(value: unknown): value is AuthUser {
  if (!isRecord(value)) {
    return false
  }

  return (
    typeof value.id === "string" &&
    typeof value.displayName === "string" &&
    isStringArray(value.roles) &&
    isPermissionArray(value.permissions) &&
    (value.email === undefined || typeof value.email === "string")
  )
}

function isAuthSession(value: unknown): value is AuthSession {
  if (!isRecord(value)) {
    return false
  }

  return (
    typeof value.accessToken === "string" &&
    isAuthUser(value.user) &&
    (value.refreshToken === undefined ||
      typeof value.refreshToken === "string") &&
    (value.expiresAt === undefined || typeof value.expiresAt === "string")
  )
}

export function getStoredAuthSession() {
  if (!canUseStorage()) {
    return null
  }

  const rawSession = window.localStorage.getItem(STORAGE_KEYS.authSession)

  if (!rawSession) {
    return null
  }

  try {
    const parsedSession: unknown = JSON.parse(rawSession)

    return isAuthSession(parsedSession) ? parsedSession : null
  } catch {
    return null
  }
}

export function setStoredAuthSession(session: AuthSession) {
  if (!canUseStorage()) {
    return
  }

  window.localStorage.setItem(STORAGE_KEYS.authSession, JSON.stringify(session))
  setAccessToken(session.accessToken)

  if (session.refreshToken) {
    setRefreshToken(session.refreshToken)
  }
}

export function clearStoredAuthSession() {
  if (!canUseStorage()) {
    return
  }

  window.localStorage.removeItem(STORAGE_KEYS.authSession)
  clearStoredTokens()
}
