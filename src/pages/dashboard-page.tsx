import {
  DashboardOverviewContent,
  useDashboardOverview,
} from "@/features/dashboard"
import { EmptyState, ErrorState, LoadingState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import { PageContainer, PageContent, PageHeader } from "@/shared/components/page"

export function DashboardPage() {
  const { data: overview, error, isError, isLoading } = useDashboardOverview()

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Dashboard data could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Monitor production health, telemetry flow, OEE performance and active operational risks from one command center."
          eyebrow="Industrial overview"
          title="Dashboard"
        />

        <PageContent>
          {isLoading ? (
            <LoadingState
              label="Loading dashboard overview"
              variant="skeleton"
            />
          ) : null}

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Dashboard data unavailable"
            />
          ) : null}

          {!isLoading && !isError && !overview ? (
            <EmptyState
              description="Dashboard overview data will appear here once monitoring telemetry is available."
              title="No dashboard data"
            />
          ) : null}

          {overview ? (
            <DashboardOverviewContent overview={overview} />
          ) : null}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
