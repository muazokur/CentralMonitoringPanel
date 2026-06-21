export type ReportType = "oee" | "production" | "downtime" | "efficiency"
export type ReportStatus = "ready" | "pending" | "failed"

export type Report = {
  id: string
  name: string
  type: ReportType
  period: string
  status: ReportStatus
  generatedAt: string
}
