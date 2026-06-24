export type ThemeMode = "light" | "dark" | "system"

export type SettingsProfile = {
  plantName: string
  timezone: string
  oeeTarget: number
  dataRetentionDays: number
  apiBaseUrl: string
  apiTimeoutMs: number
  gatewaySyncEnabled: boolean
  themeMode: ThemeMode
  denseTablesEnabled: boolean
  alertNotificationsEnabled: boolean
  notificationEmail: string
  criticalAlertEscalationMinutes: number
}

export type SettingsFormValues = SettingsProfile
