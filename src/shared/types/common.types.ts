export type ApiResponse<TData> = {
  success: boolean
  data: TData
  message?: string
  errors?: string[]
  correlationId?: string
}

export type ApiError = {
  message: string
  status?: number
  code?: string
  correlationId?: string
  details?: unknown
  isNetworkError?: boolean
}
