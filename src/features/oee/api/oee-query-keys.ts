import type { OeeDateRangeFilter } from "@/features/oee/types/oee.types"

export const oeeQueryKeys = {
  all: ["oee"] as const,
  summary: (filter?: OeeDateRangeFilter) =>
    [...oeeQueryKeys.all, "summary", filter ?? {}] as const,
}
