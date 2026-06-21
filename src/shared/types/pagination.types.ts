export type PaginationRequest = {
  pageNumber?: number
  pageSize?: number
  search?: string
  sortBy?: string
  sortDirection?: "asc" | "desc"
}

export type PaginatedResponse<TItem> = {
  items: TItem[]
  pageNumber: number
  pageSize: number
  totalCount: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}
