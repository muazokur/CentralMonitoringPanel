import { Languages } from "lucide-react"
import { useTranslation } from "react-i18next"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui"
import { useLanguage } from "@/shared/i18n"
import type { SupportedLanguage } from "@/shared/i18n"

export function LanguageSelector() {
  const { t } = useTranslation("common")
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage()

  return (
    <Select
      onValueChange={(value) => {
        void changeLanguage(value as SupportedLanguage)
      }}
      value={currentLanguage}
    >
      <SelectTrigger
        aria-label={t("language.selectorLabel")}
        className="h-10 w-[5.5rem] gap-2 px-2 sm:w-36 sm:px-3"
      >
        <Languages className="size-4 text-muted-foreground" aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {supportedLanguages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <span className="sm:hidden">{language.compactLabel}</span>
            <span className="hidden sm:inline">{language.nativeLabel}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
