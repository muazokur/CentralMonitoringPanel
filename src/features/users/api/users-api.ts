import { simulateNetwork } from "@/features/mock-utils"
import { usersMock } from "@/features/users/mocks/users.mock"
import type {
  PlatformUser,
  UserFormValues,
} from "@/features/users/types/user.types"

export async function getUsers(): Promise<PlatformUser[]> {
  return simulateNetwork(usersMock)
}

export async function createUser(values: UserFormValues): Promise<PlatformUser> {
  return simulateNetwork({
    id: `user-${crypto.randomUUID()}`,
    email: values.email,
    fullName: values.fullName,
    role: values.roleId,
    status: values.status,
  })
}

export async function updateUser(
  userId: string,
  values: UserFormValues,
): Promise<PlatformUser> {
  return simulateNetwork({
    id: userId,
    email: values.email,
    fullName: values.fullName,
    role: values.roleId,
    status: values.status,
  })
}

export async function deleteUser(userId: string): Promise<{ id: string }> {
  return simulateNetwork({ id: userId })
}
