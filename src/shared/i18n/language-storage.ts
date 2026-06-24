import {
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGE_CODES,
} from "@/shared/i18n/language.constants"
import type { SupportedLanguage } from "@/shared/i18n/language.types"

function canUseLocalStorage() {
  return typeof window !== "undefined" && Boolean(window.localStorage)
}

export function isSupportedLanguage(
  language: string | null | undefined,
): language is SupportedLanguage {
  return SUPPORTED_LANGUAGE_CODES.includes(language as SupportedLanguage)
}

export function getStoredLanguage(): SupportedLanguage | null {
  if (!canUseLocalStorage()) {
    return null
  }

  const language = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  return isSupportedLanguage(language) ? language : null
}

export function setStoredLanguage(language: SupportedLanguage) {
  if (!canUseLocalStorage()) {
    return
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
}

export function clearStoredLanguage() {
  if (!canUseLocalStorage()) {
    return
  }

  window.localStorage.removeItem(LANGUAGE_STORAGE_KEY)
}
