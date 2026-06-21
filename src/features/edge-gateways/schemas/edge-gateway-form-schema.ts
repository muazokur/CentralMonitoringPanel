import { z } from "zod"

export const edgeGatewayFormSchema = z.object({
  firmwareVersion: z.string().min(1, "Firmware version is required"),
  ipAddress: z.string().min(7, "IP address is required"),
  location: z.string().min(1, "Location is required"),
  name: z.string().min(2, "Gateway name is required"),
})

export type EdgeGatewayFormSchema = z.infer<typeof edgeGatewayFormSchema>
