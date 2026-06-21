import type { AuthSession } from "@/shared/types"

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = AuthSession
