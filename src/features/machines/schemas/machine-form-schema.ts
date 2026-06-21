import { z } from "zod"

export const machineFormSchema = z.object({
  code: z.string().min(2, "Machine code is required"),
  gatewayId: z.string().min(1, "Gateway is required"),
  name: z.string().min(2, "Machine name is required"),
  status: z.enum(["active", "inactive", "warning", "critical"]),
})

export type MachineFormSchema = z.infer<typeof machineFormSchema>
