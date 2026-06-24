import { useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"

import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from "@/shared/i18n/language.constants"
import {
  isSupportedLanguage,
  setStoredLanguage,
} from "@/shared/i18n/language-storage"
import type { SupportedLanguage } from "@/shared/i18n/language.types"

function normalizeLanguage(language: string | undefined): SupportedLanguage {
  const languageCode = language?.split("-")[0]

  return isSupportedLanguage(languageCode) ? languageCode : DEFAULT_LANGUAGE
}

export function useLanguage() {
  const { i18n } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language)

  const changeLanguage = useCallback(
    async (language: SupportedLanguage) => {
      setStoredLanguage(language)
      await i18n.changeLanguage(language)
    },
    [i18n],
  )

  return useMemo(
    () => ({
      changeLanguage,
      currentLanguage,
      isEnglish: currentLanguage === "en",
      isTurkish: currentLanguage === "tr",
      supportedLanguages: SUPPORTED_LANGUAGES,
    }),
    [changeLanguage, currentLanguage],
  )
}
