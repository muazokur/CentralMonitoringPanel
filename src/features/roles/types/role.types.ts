export type Role = {
  id: string
  name: string
  description: string
  userCount: number
  permissionCount: number
}

export type RoleFormValues = {
  name: string
  description: string
  permissions: string[]
}
