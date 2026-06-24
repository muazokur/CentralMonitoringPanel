import type { SettingsProfile } from "@/features/settings/types/settings.types"

export const settingsMock: SettingsProfile = {
  apiBaseUrl: "https://api.factory.example/v1",
  apiTimeoutMs: 15000,
  alertNotificationsEnabled: true,
  criticalAlertEscalationMinutes: 10,
  dataRetentionDays: 180,
  denseTablesEnabled: false,
  gatewaySyncEnabled: true,
  notificationEmail: "operations@factory.example",
  oeeTarget: 75,
  plantName: "PDC Istanbul Factory",
  themeMode: "system",
  timezone: "Europe/Istanbul",
}
