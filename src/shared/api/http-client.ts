import axios from "axios"
import type { AxiosRequestConfig } from "axios"

import { env } from "@/app/config/env"
import { ROUTE_PATHS } from "@/app/router/route-paths"
import { clearStoredAuthSession } from "@/shared/auth/auth-session"
import { getAccessToken } from "@/shared/auth/token-storage"
import { normalizeApiError } from "@/shared/api/api-error"
import type { ApiResponse } from "@/shared/types"

function redirectTo(path: string, includeRedirect = false) {
  if (typeof window === "undefined") {
    return
  }

  const currentPath = `${window.location.pathname}${window.location.search}`

  if (window.location.pathname === path) {
    return
  }

  const target = includeRedirect
    ? `${path}?redirect=${encodeURIComponent(currentPath)}`
    : path

  window.location.assign(target)
}

export const httpClient = axios.create({
  baseURL: env.apiBaseUrl || undefined,
  timeout: env.apiTimeoutMs,
  headers: {
    "Content-Type": "application/json",
  },
})

httpClient.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    const apiError = normalizeApiError(error)

    if (apiError.status === 401) {
      clearStoredAuthSession()
      redirectTo(ROUTE_PATHS.login, true)
    }

    if (apiError.status === 403) {
      redirectTo(ROUTE_PATHS.forbidden)
    }

    return Promise.reject(apiError)
  },
)

export function unwrapApiResponse<TData>(response: ApiResponse<TData> | TData) {
  if (
    typeof response === "object" &&
    response !== null &&
    "success" in response &&
    "data" in response
  ) {
    return (response as ApiResponse<TData>).data
  }

  return response as TData
}

export async function apiGet<TData>(
  url: string,
  config?: AxiosRequestConfig,
) {
  const response = await httpClient.get<ApiResponse<TData> | TData>(url, config)

  return unwrapApiResponse<TData>(response.data)
}

export async function apiPost<TData, TVariables = unknown>(
  url: string,
  variables?: TVariables,
  config?: AxiosRequestConfig,
) {
  const response = await httpClient.post<ApiResponse<TData> | TData>(
    url,
    variables,
    config,
  )

  return unwrapApiResponse<TData>(response.data)
}
