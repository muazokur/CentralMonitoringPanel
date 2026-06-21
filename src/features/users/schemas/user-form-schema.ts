import { z } from "zod"

export const userFormSchema = z.object({
  email: z.email("Enter a valid email address"),
  fullName: z.string().min(2, "Full name is required"),
  roleId: z.string().min(1, "Role is required"),
  status: z.enum(["active", "inactive"]),
})

export type UserFormSchema = z.infer<typeof userFormSchema>
