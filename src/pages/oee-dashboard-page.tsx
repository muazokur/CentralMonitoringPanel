import { useState } from "react"

import {
  MachineOeeChart,
  OeeComparisonCard,
  OeeDateRangeFilterPanel,
  OeeSummaryCards,
  OeeTrendChart,
  ShiftComparisonChart,
  useOeeSummary,
  type OeeDateRangeFilter as OeeDateRangeFilterValue,
} from "@/features/oee"
import { EmptyState, ErrorState, LoadingState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageSection,
} from "@/shared/components/page"

export function OeeDashboardPage() {
  const [filter, setFilter] = useState<OeeDateRangeFilterValue>({})
  const { data: summary, error, isError, isFetching, isLoading } =
    useOeeSummary(filter)

  const errorDescription =
    error instanceof Error
      ? error.message
      : "OEE metrics could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Monitor availability, performance, quality and OEE across machines and shifts."
          title="OEE Dashboard"
        />
        <PageContent>
          <OeeDateRangeFilterPanel
            disabled={isFetching}
            filter={filter}
            onFilterChange={setFilter}
          />

          {isLoading ? (
            <LoadingState label="Loading OEE dashboard" variant="skeleton" />
          ) : null}

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="OEE dashboard unavailable"
            />
          ) : null}

          {!isLoading && !isError && !summary ? (
            <EmptyState
              description="No OEE metrics are available for the selected date range."
              title="No OEE data found"
            />
          ) : null}

          {summary ? (
            <>
              <OeeSummaryCards summary={summary} />

              <PageSection title="OEE analysis">
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
                  <OeeTrendChart data={summary.trend} />
                  <MachineOeeChart data={summary.machineBasedOee} />
                </div>
              </PageSection>

              <PageSection title="Shift and period comparison">
                <div className="grid gap-4 xl:grid-cols-[minmax(360px,0.8fr)_minmax(0,1.2fr)]">
                  <ShiftComparisonChart data={summary.shiftBasedOee} />
                  <OeeComparisonCard
                    comparison={summary.dateRangeComparison}
                  />
                </div>
              </PageSection>
            </>
          ) : null}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
