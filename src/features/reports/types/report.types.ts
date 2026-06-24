export type ReportType = "oee" | "production" | "downtime" | "efficiency"
export type ReportStatus = "ready" | "pending" | "failed"
export type ReportExportFormat = "pdf" | "xlsx"

export type Report = {
  id: string
  name: string
  type: ReportType
  period: string
  status: ReportStatus
  generatedAt: string
}

export type ReportExportResult = {
  reportId: string
  format: ReportExportFormat
  requestedAt: string
}
