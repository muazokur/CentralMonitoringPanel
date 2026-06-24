import type { SelectOption } from "@/shared/types"

export type TagValueQuality = "good" | "uncertain" | "bad"

export type TagValueHistoryItem = {
  id: string
  tag: string
  machine: string
  gateway: string
  value: string
  quality: TagValueQuality
  timestamp: string
}

export type TagValueHistoryFilters = {
  fromDate?: string
  toDate?: string
  machine?: string
  tag?: string
}

export type TagValueHistoryFilterOptions = {
  machines: SelectOption[]
  tags: SelectOption[]
}
