import { z } from "zod"

export const settingsFormSchema = z.object({
  alertNotificationsEnabled: z.boolean(),
  dataRetentionDays: z.coerce.number().int().min(1),
  oeeTarget: z.coerce.number().min(1).max(100),
  plantName: z.string().min(2, "Plant name is required"),
  timezone: z.string().min(1, "Timezone is required"),
})

export type SettingsFormSchema = z.infer<typeof settingsFormSchema>
