export type ApiResponse<T> = {
  success: boolean
  data: T
  message?: string
  errors?: string[]
  correlationId?: string
}

export type PagedResult<T> = {
  items: T[]
  pageNumber: number
  pageSize: number
  totalCount: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export type ApiError = {
  message: string
  status?: number
  code?: string
  correlationId?: string
  details?: unknown
}
