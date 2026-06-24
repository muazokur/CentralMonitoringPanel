import { simulateNetwork } from "@/features/mock-utils"
import { tagValueHistoryMock } from "@/features/tag-value-history/mocks/tag-value-history.mock"
import type {
  TagValueHistoryFilterOptions,
  TagValueHistoryFilters,
  TagValueHistoryItem,
} from "@/features/tag-value-history/types/tag-value-history.types"

function getDateBoundary(date: string, endOfDay = false) {
  return new Date(`${date}T${endOfDay ? "23:59:59.999" : "00:00:00.000"}Z`)
}

function matchesFilters(
  item: TagValueHistoryItem,
  filters?: TagValueHistoryFilters,
) {
  if (!filters) {
    return true
  }

  const itemTime = new Date(item.timestamp).getTime()
  const fromTime = filters.fromDate
    ? getDateBoundary(filters.fromDate).getTime()
    : null
  const toTime = filters.toDate
    ? getDateBoundary(filters.toDate, true).getTime()
    : null

  return (
    (!filters.machine || item.machine === filters.machine) &&
    (!filters.tag || item.tag === filters.tag) &&
    (fromTime === null || itemTime >= fromTime) &&
    (toTime === null || itemTime <= toTime)
  )
}

function toOptions(values: string[]) {
  return Array.from(new Set(values))
    .sort((first, second) => first.localeCompare(second))
    .map((value) => ({
      label: value,
      value,
    }))
}

export async function getTagValueHistory(
  filters?: TagValueHistoryFilters,
): Promise<TagValueHistoryItem[]> {
  return simulateNetwork(tagValueHistoryMock.filter((item) => matchesFilters(item, filters)))
}

export async function getTagValueHistoryFilterOptions(): Promise<TagValueHistoryFilterOptions> {
  return simulateNetwork({
    machines: toOptions(tagValueHistoryMock.map((item) => item.machine)),
    tags: toOptions(tagValueHistoryMock.map((item) => item.tag)),
  })
}
