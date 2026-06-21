import { z } from "zod"

export const tagFormSchema = z.object({
  code: z.string().min(2, "Tag code is required"),
  dataType: z.enum(["boolean", "integer", "float", "string"]),
  gatewayId: z.string().min(1, "Gateway is required"),
  isActive: z.boolean(),
  machineId: z.string().min(1, "Machine is required"),
  name: z.string().min(2, "Tag name is required"),
  unit: z.string(),
})

export type TagFormSchema = z.infer<typeof tagFormSchema>
