import { useCallback, useState } from "react"

import {
  ReportCards,
  ReportsTable,
  useExportReport,
  useReports,
  type Report,
  type ReportExportFormat,
} from "@/features/reports"
import { EmptyState, ErrorState, LoadingState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageSection,
} from "@/shared/components/page"
import { useToast } from "@/shared/components/ui"

const EMPTY_REPORTS: Report[] = []

function getExportKey(reportId: string, format: ReportExportFormat) {
  return `${reportId}:${format}`
}

export function ReportsPage() {
  const { showToast } = useToast()
  const [exportingKey, setExportingKey] = useState<string | null>(null)
  const { data, error, isError, isLoading } = useReports()
  const exportReportMutation = useExportReport()
  const reports = data ?? EMPTY_REPORTS

  const exportReport = useCallback(async (
    report: Report,
    format: ReportExportFormat,
  ) => {
    setExportingKey(getExportKey(report.id, format))

    try {
      await exportReportMutation.mutateAsync({
        format,
        reportId: report.id,
      })
      showToast({
        description: `${report.name} export has been queued as ${format.toUpperCase()}.`,
        title: "Report export queued",
        tone: "success",
      })
    } finally {
      setExportingKey(null)
    }
  }, [exportReportMutation, showToast])

  const isExporting = useCallback((
    reportId: string,
    format: ReportExportFormat,
  ) => exportingKey === getExportKey(reportId, format), [exportingKey])

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Reports could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Access OEE, production, downtime and efficiency reports with export actions."
          title="Reports"
        />
        <PageContent>
          {isLoading ? (
            <LoadingState label="Loading reports" variant="skeleton" />
          ) : null}

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Reports unavailable"
            />
          ) : null}

          {!isLoading && !isError && reports.length === 0 ? (
            <EmptyState
              description="No reports have been generated yet."
              title="No reports found"
            />
          ) : null}

          {reports.length > 0 ? (
            <>
              <PageSection title="Report cards">
                <ReportCards
                  isExporting={isExporting}
                  onExport={exportReport}
                  reports={reports}
                />
              </PageSection>

              <PageSection title="Report list">
                <ReportsTable
                  data={reports}
                  isExporting={isExporting}
                  isLoading={isLoading}
                  onExport={exportReport}
                />
              </PageSection>
            </>
          ) : null}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
