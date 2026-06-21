export type UserStatus = "active" | "inactive"

export type PlatformUser = {
  id: string
  fullName: string
  email: string
  role: string
  status: UserStatus
  lastLogin?: string
}

export type UserFormValues = {
  fullName: string
  email: string
  roleId: string
  status: UserStatus
}
