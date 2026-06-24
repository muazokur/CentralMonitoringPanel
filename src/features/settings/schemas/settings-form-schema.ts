import { z } from "zod"

export const settingsFormSchema = z.object({
  apiBaseUrl: z.url("API base URL must be valid"),
  apiTimeoutMs: z.coerce.number().int().min(1000).max(120000),
  alertNotificationsEnabled: z.boolean(),
  criticalAlertEscalationMinutes: z.coerce.number().int().min(1).max(240),
  dataRetentionDays: z.coerce.number().int().min(1),
  denseTablesEnabled: z.boolean(),
  gatewaySyncEnabled: z.boolean(),
  notificationEmail: z.email("Notification email must be valid"),
  oeeTarget: z.coerce.number().min(1).max(100),
  plantName: z.string().min(2, "Plant name is required"),
  themeMode: z.enum(["light", "dark", "system"]),
  timezone: z.string().min(1, "Timezone is required"),
})

export type SettingsFormSchema = z.infer<typeof settingsFormSchema>
