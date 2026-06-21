import axios from "axios"

import { env } from "@/app/config/env"
import { getStoredAuthSession } from "@/shared/auth/auth-storage"

export const httpClient = axios.create({
  baseURL: env.apiBaseUrl || undefined,
  headers: {
    "Content-Type": "application/json",
  },
})

httpClient.interceptors.request.use((config) => {
  const session = getStoredAuthSession()

  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`
  }

  return config
})
