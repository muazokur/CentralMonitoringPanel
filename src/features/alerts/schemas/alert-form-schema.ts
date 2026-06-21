import { z } from "zod"

export const alertFormSchema = z.object({
  machineId: z.string().min(1, "Machine is required"),
  message: z.string().min(5, "Message is required"),
  severity: z.enum(["warning", "critical"]),
  status: z.enum(["active", "resolved", "pending"]),
  tagId: z.string().min(1, "Tag is required"),
})

export type AlertFormSchema = z.infer<typeof alertFormSchema>
