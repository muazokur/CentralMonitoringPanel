import { simulateNetwork } from "@/features/mock-utils"
import { tagValueHistoryMock } from "@/features/tag-value-history/mocks/tag-value-history.mock"
import type { TagValueHistoryItem } from "@/features/tag-value-history/types/tag-value-history.types"

export async function getTagValueHistory(): Promise<TagValueHistoryItem[]> {
  return simulateNetwork(tagValueHistoryMock)
}
