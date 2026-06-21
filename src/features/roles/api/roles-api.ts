import { simulateNetwork } from "@/features/mock-utils"
import { rolesMock } from "@/features/roles/mocks/roles.mock"
import type { Role, RoleFormValues } from "@/features/roles/types/role.types"

export async function getRoles(): Promise<Role[]> {
  return simulateNetwork(rolesMock)
}

export async function createRole(values: RoleFormValues): Promise<Role> {
  return simulateNetwork({
    id: `role-${crypto.randomUUID()}`,
    description: values.description,
    name: values.name,
    permissionCount: values.permissions.length,
    userCount: 0,
  })
}

export async function updateRole(
  roleId: string,
  values: RoleFormValues,
): Promise<Role> {
  return simulateNetwork({
    id: roleId,
    description: values.description,
    name: values.name,
    permissionCount: values.permissions.length,
    userCount: rolesMock[0].userCount,
  })
}

export async function deleteRole(roleId: string): Promise<{ id: string }> {
  return simulateNetwork({ id: roleId })
}
