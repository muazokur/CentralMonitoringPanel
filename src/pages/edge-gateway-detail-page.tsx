import { ArrowLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router"

import {
  EdgeGatewayAlertsTable,
  EdgeGatewayConnectedMachinesTable,
  EdgeGatewayHealthCard,
  EdgeGatewaySummaryCards,
  EdgeGatewayTagValuesTable,
  useEdgeGatewayDetail,
} from "@/features/edge-gateways"
import { EmptyState, ErrorState, LoadingState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageSection,
} from "@/shared/components/page"
import { Button } from "@/shared/components/ui"

export function EdgeGatewayDetailPage() {
  const navigate = useNavigate()
  const { edgeGatewayId } = useParams()
  const {
    data: gateway,
    error,
    isError,
    isLoading,
  } = useEdgeGatewayDetail(edgeGatewayId ?? "")

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Gateway detail could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          actions={
            <Button
              onClick={() => navigate("/app/edge-gateways")}
              variant="outline"
            >
              <ArrowLeft aria-hidden="true" />
              Back to gateways
            </Button>
          }
          description="Gateway health, connected machines, latest tag values and related alerts."
          title={gateway?.name ?? "Edge Gateway Detail"}
        />
        <PageContent>
          {isLoading ? (
            <LoadingState label="Loading gateway detail" variant="skeleton" />
          ) : null}

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Gateway detail unavailable"
            />
          ) : null}

          {!isLoading && !isError && !gateway ? (
            <EmptyState
              description="The requested gateway could not be found."
              title="Gateway not found"
            />
          ) : null}

          {gateway ? (
            <>
              <EdgeGatewaySummaryCards gateway={gateway} />

              <PageSection title="Health status">
                <EdgeGatewayHealthCard gateway={gateway} />
              </PageSection>

              <PageSection
                description="Machines currently connected through this EdgeGateway."
                title="Connected machines"
              >
                <EdgeGatewayConnectedMachinesTable
                  data={gateway.connectedMachines}
                />
              </PageSection>

              <PageSection
                description="Most recent values received from PLC tags routed by this gateway."
                title="Recent tag values"
              >
                <EdgeGatewayTagValuesTable data={gateway.recentTagValues} />
              </PageSection>

              <PageSection title="Alerts">
                <EdgeGatewayAlertsTable data={gateway.alerts} />
              </PageSection>
            </>
          ) : null}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
