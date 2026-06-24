import { simulateNetwork } from "@/features/mock-utils"
import { oeeSummaryMock } from "@/features/oee/mocks/oee.mock"
import type {
  OeeDateRangeFilter,
  OeeSummary,
} from "@/features/oee/types/oee.types"

function hasDateRange(filter?: OeeDateRangeFilter) {
  return Boolean(filter?.fromDate || filter?.toDate)
}

export async function getOeeSummary(
  filter?: OeeDateRangeFilter,
): Promise<OeeSummary> {
  if (!hasDateRange(filter)) {
    return simulateNetwork(oeeSummaryMock)
  }

  return simulateNetwork({
    ...oeeSummaryMock,
    dateRangeComparison: {
      currentOee: oeeSummaryMock.dateRangeComparison.currentOee,
      delta: 2.1,
      previousOee: 67.5,
    },
  })
}
