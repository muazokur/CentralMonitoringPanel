import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import enAlerts from "@/shared/i18n/locales/en/alerts.json"
import enAnalytics from "@/shared/i18n/locales/en/analytics.json"
import enAuth from "@/shared/i18n/locales/en/auth.json"
import enCommon from "@/shared/i18n/locales/en/common.json"
import enDashboard from "@/shared/i18n/locales/en/dashboard.json"
import enDates from "@/shared/i18n/locales/en/dates.json"
import enEdgeGateways from "@/shared/i18n/locales/en/edge-gateways.json"
import enErrors from "@/shared/i18n/locales/en/errors.json"
import enMachines from "@/shared/i18n/locales/en/machines.json"
import enNavigation from "@/shared/i18n/locales/en/navigation.json"
import enOee from "@/shared/i18n/locales/en/oee.json"
import enReports from "@/shared/i18n/locales/en/reports.json"
import enRoles from "@/shared/i18n/locales/en/roles.json"
import enSettings from "@/shared/i18n/locales/en/settings.json"
import enTagValueHistory from "@/shared/i18n/locales/en/tag-value-history.json"
import enTags from "@/shared/i18n/locales/en/tags.json"
import enUsers from "@/shared/i18n/locales/en/users.json"
import enValidation from "@/shared/i18n/locales/en/validation.json"
import trAlerts from "@/shared/i18n/locales/tr/alerts.json"
import trAnalytics from "@/shared/i18n/locales/tr/analytics.json"
import trAuth from "@/shared/i18n/locales/tr/auth.json"
import trCommon from "@/shared/i18n/locales/tr/common.json"
import trDashboard from "@/shared/i18n/locales/tr/dashboard.json"
import trDates from "@/shared/i18n/locales/tr/dates.json"
import trEdgeGateways from "@/shared/i18n/locales/tr/edge-gateways.json"
import trErrors from "@/shared/i18n/locales/tr/errors.json"
import trMachines from "@/shared/i18n/locales/tr/machines.json"
import trNavigation from "@/shared/i18n/locales/tr/navigation.json"
import trOee from "@/shared/i18n/locales/tr/oee.json"
import trReports from "@/shared/i18n/locales/tr/reports.json"
import trRoles from "@/shared/i18n/locales/tr/roles.json"
import trSettings from "@/shared/i18n/locales/tr/settings.json"
import trTagValueHistory from "@/shared/i18n/locales/tr/tag-value-history.json"
import trTags from "@/shared/i18n/locales/tr/tags.json"
import trUsers from "@/shared/i18n/locales/tr/users.json"
import trValidation from "@/shared/i18n/locales/tr/validation.json"
import {
  DEFAULT_LANGUAGE,
  DEFAULT_NAMESPACE,
  FALLBACK_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGE_CODES,
  TRANSLATION_NAMESPACES,
  type TranslationNamespace,
} from "@/shared/i18n/language.constants"
import { getStoredLanguage } from "@/shared/i18n/language-storage"
import type { SupportedLanguage } from "@/shared/i18n/language.types"

const resources = {
  en: {
    alerts: enAlerts,
    analytics: enAnalytics,
    auth: enAuth,
    common: enCommon,
    dashboard: enDashboard,
    dates: enDates,
    "edge-gateways": enEdgeGateways,
    errors: enErrors,
    machines: enMachines,
    navigation: enNavigation,
    oee: enOee,
    reports: enReports,
    roles: enRoles,
    settings: enSettings,
    "tag-value-history": enTagValueHistory,
    tags: enTags,
    users: enUsers,
    validation: enValidation,
  },
  tr: {
    alerts: trAlerts,
    analytics: trAnalytics,
    auth: trAuth,
    common: trCommon,
    dashboard: trDashboard,
    dates: trDates,
    "edge-gateways": trEdgeGateways,
    errors: trErrors,
    machines: trMachines,
    navigation: trNavigation,
    oee: trOee,
    reports: trReports,
    roles: trRoles,
    settings: trSettings,
    "tag-value-history": trTagValueHistory,
    tags: trTags,
    users: trUsers,
    validation: trValidation,
  },
} satisfies Record<SupportedLanguage, Record<TranslationNamespace, object>>

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: DEFAULT_NAMESPACE,
    detection: {
      caches: [],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      order: ["localStorage"],
    },
    fallbackLng: FALLBACK_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    lng: getStoredLanguage() ?? DEFAULT_LANGUAGE,
    ns: TRANSLATION_NAMESPACES,
    resources,
    returnNull: false,
    supportedLngs: SUPPORTED_LANGUAGE_CODES,
  })

export { i18n }
