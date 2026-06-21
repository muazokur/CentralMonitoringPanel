export type SettingsProfile = {
  plantName: string
  timezone: string
  oeeTarget: number
  alertNotificationsEnabled: boolean
  dataRetentionDays: number
}

export type SettingsFormValues = SettingsProfile
