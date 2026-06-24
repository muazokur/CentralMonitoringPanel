export { i18n } from "@/shared/i18n/i18n.config"
export {
  DEFAULT_LANGUAGE,
  FALLBACK_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGE_CODES,
  SUPPORTED_LANGUAGES,
  TRANSLATION_NAMESPACES,
  type TranslationNamespace,
} from "@/shared/i18n/language.constants"
export {
  clearStoredLanguage,
  getStoredLanguage,
  isSupportedLanguage,
  setStoredLanguage,
} from "@/shared/i18n/language-storage"
export type {
  SupportedLanguage,
  SupportedLanguageOption,
} from "@/shared/i18n/language.types"
export { translationKeys } from "@/shared/i18n/translation-keys"
export { useLanguage } from "@/shared/i18n/use-language"
