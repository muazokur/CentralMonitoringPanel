import type { ReactNode } from "react"

import { AuthProvider as SharedAuthProvider } from "@/shared/auth"

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  return <SharedAuthProvider>{children}</SharedAuthProvider>
}
