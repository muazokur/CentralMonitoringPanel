import { simulateNetwork } from "@/features/mock-utils"
import { reportsMock } from "@/features/reports/mocks/reports.mock"
import type { Report } from "@/features/reports/types/report.types"

export async function getReports(): Promise<Report[]> {
  return simulateNetwork(reportsMock)
}
