import { z } from "zod"

export const roleFormSchema = z.object({
  description: z.string().min(5, "Description is required"),
  name: z.string().min(2, "Role name is required"),
  permissions: z.array(z.string()),
})

export type RoleFormSchema = z.infer<typeof roleFormSchema>
