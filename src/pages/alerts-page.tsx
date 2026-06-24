import { useCallback, useState } from "react"

import {
  AlertsFilterPanel,
  AlertsTable,
  useAlertFilterOptions,
  useAlerts,
  type Alert,
  type AlertFilterOptions,
  type AlertFilters,
} from "@/features/alerts"
import { ErrorState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"
import { useToast } from "@/shared/components/ui"

const EMPTY_ALERTS: Alert[] = []
const EMPTY_ALERT_FILTER_OPTIONS: AlertFilterOptions = {
  machines: [],
}

export function AlertsPage() {
  const [filters, setFilters] = useState<AlertFilters>({})
  const { showToast } = useToast()
  const { data, error, isError, isLoading } = useAlerts(filters)
  const { data: filterOptions, isLoading: isLoadingFilterOptions } =
    useAlertFilterOptions()
  const alerts = data ?? EMPTY_ALERTS

  const reviewAlert = useCallback((alert: Alert) => {
    showToast({
      description: `${alert.machine} - ${alert.message}`,
      title: "Alert selected",
      tone: alert.severity === "critical" ? "danger" : "warning",
    })
  }, [showToast])

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Alerts could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Review alarm severity, status, machine relation and resolution history."
          title="Alerts"
        />
        <PageContent>
          <AlertsFilterPanel
            disabled={isLoadingFilterOptions}
            filterOptions={filterOptions ?? EMPTY_ALERT_FILTER_OPTIONS}
            filters={filters}
            onFiltersChange={setFilters}
          />

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Alerts unavailable"
            />
          ) : (
            <AlertsTable
              data={alerts}
              isLoading={isLoading}
              onReviewAlert={reviewAlert}
              onRowClick={reviewAlert}
            />
          )}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
