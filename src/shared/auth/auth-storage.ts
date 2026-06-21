import { STORAGE_KEYS } from "@/shared/constants"
import { isRecord, isStringArray } from "@/shared/lib/guards"
import type { AuthSession, AuthUser } from "@/shared/types"

function isBrowserStorageAvailable() {
  return typeof window !== "undefined" && Boolean(window.localStorage)
}

function isAuthUser(value: unknown): value is AuthUser {
  if (!isRecord(value)) {
    return false
  }

  return (
    typeof value.id === "string" &&
    typeof value.displayName === "string" &&
    isStringArray(value.roles) &&
    isStringArray(value.permissions) &&
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
  if (!isBrowserStorageAvailable()) {
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
  if (!isBrowserStorageAvailable()) {
    return
  }

  window.localStorage.setItem(STORAGE_KEYS.authSession, JSON.stringify(session))
}

export function clearStoredAuthSession() {
  if (!isBrowserStorageAvailable()) {
    return
  }

  window.localStorage.removeItem(STORAGE_KEYS.authSession)
}
