import { simulateNetwork } from "@/features/mock-utils"
import { reportsMock } from "@/features/reports/mocks/reports.mock"
import type {
  Report,
  ReportExportFormat,
  ReportExportResult,
} from "@/features/reports/types/report.types"

export async function getReports(): Promise<Report[]> {
  return simulateNetwork(reportsMock)
}

export async function exportReport(
  reportId: string,
  format: ReportExportFormat,
): Promise<ReportExportResult> {
  return simulateNetwork({
    format,
    reportId,
    requestedAt: new Date().toISOString(),
  })
}
