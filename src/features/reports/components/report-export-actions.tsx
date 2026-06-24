import { Download, LoaderCircle } from "lucide-react"

import { Button } from "@/shared/components/ui"

import type {
  Report,
  ReportExportFormat,
} from "@/features/reports/types/report.types"

type ReportExportActionsProps = {
  report: Report
  onExport?: (report: Report, format: ReportExportFormat) => void
  isExporting?: (reportId: string, format: ReportExportFormat) => boolean
}

export function ReportExportActions({
  report,
  onExport,
  isExporting,
}: ReportExportActionsProps) {
  const canExport = report.status === "ready"

  return (
    <div className="flex flex-wrap gap-2">
      {(["pdf", "xlsx"] as const).map((format) => {
        const isActive = isExporting?.(report.id, format) ?? false

        return (
          <Button
            disabled={!canExport || isActive}
            key={format}
            onClick={(event) => {
              event.stopPropagation()
              onExport?.(report, format)
            }}
            size="sm"
            variant="outline"
          >
            {isActive ? (
              <LoaderCircle aria-hidden="true" className="animate-spin" />
            ) : (
              <Download aria-hidden="true" />
            )}
            {format.toUpperCase()}
          </Button>
        )
      })}
    </div>
  )
}
