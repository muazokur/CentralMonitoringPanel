import { simulateNetwork } from "@/features/mock-utils"
import { analyticsSummaryMock } from "@/features/analytics/mocks/analytics.mock"
import type { AnalyticsSummary } from "@/features/analytics/types/analytics.types"

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  return simulateNetwork(analyticsSummaryMock)
}
