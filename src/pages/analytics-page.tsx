import {
  AnalyticsSummaryCards,
  DowntimeSummaryChart,
  EfficiencyTrendChart,
  MachineComparisonChart,
  ProductionPerformanceChart,
  useAnalyticsSummary,
} from "@/features/analytics"
import { EmptyState, ErrorState, LoadingState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageSection,
} from "@/shared/components/page"

export function AnalyticsPage() {
  const { data: summary, error, isError, isLoading } = useAnalyticsSummary()

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Analytics data could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Track production efficiency, downtime and machine performance trends."
          title="Analytics"
        />
        <PageContent>
          {isLoading ? (
            <LoadingState label="Loading analytics" variant="skeleton" />
          ) : null}

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Analytics unavailable"
            />
          ) : null}

          {!isLoading && !isError && !summary ? (
            <EmptyState
              description="No analytics summary is available yet."
              title="No analytics data found"
            />
          ) : null}

          {summary ? (
            <>
              <AnalyticsSummaryCards summary={summary} />

              <PageSection title="Operational trends">
                <div className="grid gap-4 xl:grid-cols-2">
                  <EfficiencyTrendChart data={summary.trend} />
                  <ProductionPerformanceChart
                    data={summary.productionPerformance}
                  />
                </div>
              </PageSection>

              <PageSection title="Downtime and machine comparison">
                <div className="grid gap-4 xl:grid-cols-2">
                  <DowntimeSummaryChart data={summary.downtimeSummary} />
                  <MachineComparisonChart data={summary.machineComparison} />
                </div>
              </PageSection>
            </>
          ) : null}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
