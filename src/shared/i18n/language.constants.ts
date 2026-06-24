import { STORAGE_KEYS } from "@/shared/constants"
import type {
  SupportedLanguage,
  SupportedLanguageOption,
} from "@/shared/i18n/language.types"

export const DEFAULT_LANGUAGE: SupportedLanguage = "tr"
export const FALLBACK_LANGUAGE: SupportedLanguage = "tr"
export const LANGUAGE_STORAGE_KEY = STORAGE_KEYS.language

export const SUPPORTED_LANGUAGES: SupportedLanguageOption[] = [
  {
    code: "tr",
    compactLabel: "TR",
    label: "Turkish",
    nativeLabel: "Türkçe",
  },
  {
    code: "en",
    compactLabel: "EN",
    label: "English",
    nativeLabel: "English",
  },
]

export const SUPPORTED_LANGUAGE_CODES = SUPPORTED_LANGUAGES.map(
  (language) => language.code,
)

export const DEFAULT_NAMESPACE = "common"

export const TRANSLATION_NAMESPACES = [
  "common",
  "navigation",
  "auth",
  "dashboard",
  "edge-gateways",
  "machines",
  "tags",
  "tag-value-history",
  "oee",
  "analytics",
  "alerts",
  "reports",
  "users",
  "roles",
  "settings",
  "errors",
  "validation",
  "dates",
] as const

export type TranslationNamespace = (typeof TRANSLATION_NAMESPACES)[number]
