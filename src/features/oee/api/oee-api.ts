import { simulateNetwork } from "@/features/mock-utils"
import { oeeSummaryMock } from "@/features/oee/mocks/oee.mock"
import type { OeeSummary } from "@/features/oee/types/oee.types"

export async function getOeeSummary(): Promise<OeeSummary> {
  return simulateNetwork(oeeSummaryMock)
}
