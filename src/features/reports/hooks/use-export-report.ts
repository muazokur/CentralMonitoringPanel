import { useMutation } from "@tanstack/react-query"

import { exportReport } from "@/features/reports/api/reports-api"
import type { ReportExportFormat } from "@/features/reports/types/report.types"

type ExportReportVariables = {
  reportId: string
  format: ReportExportFormat
}

export function useExportReport() {
  return useMutation({
    mutationFn: ({ reportId, format }: ExportReportVariables) =>
      exportReport(reportId, format),
  })
}
