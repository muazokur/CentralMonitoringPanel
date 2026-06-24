import { BarChart3, Clock3, FileText, Gauge } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

import { ReportExportActions } from "@/features/reports/components/report-export-actions"
import type {
  Report,
  ReportExportFormat,
  ReportStatus,
  ReportType,
} from "@/features/reports/types/report.types"

const reportIconMap: Record<ReportType, LucideIcon> = {
  downtime: Clock3,
  efficiency: Gauge,
  oee: BarChart3,
  production: FileText,
}

const reportStatusMap: Record<ReportStatus, "active" | "pending" | "critical"> = {
  failed: "critical",
  pending: "pending",
  ready: "active",
}

type ReportCardsProps = {
  reports: Report[]
  onExport?: (report: Report, format: ReportExportFormat) => void
  isExporting?: (reportId: string, format: ReportExportFormat) => boolean
}

export function ReportCards({
  reports,
  onExport,
  isExporting,
}: ReportCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {reports.map((report) => {
        const Icon = reportIconMap[report.type]

        return (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <CardTitle>{report.name}</CardTitle>
                  <CardDescription>{report.period}</CardDescription>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={reportStatusMap[report.status]}>
                  {report.status}
                </StatusBadge>
                <StatusBadge tone="info" withDot={false}>
                  {report.type}
                </StatusBadge>
              </div>
              <p className="text-sm text-muted-foreground">
                Generated {new Date(report.generatedAt).toLocaleString()}
              </p>
              <ReportExportActions
                isExporting={isExporting}
                onExport={onExport}
                report={report}
              />
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
