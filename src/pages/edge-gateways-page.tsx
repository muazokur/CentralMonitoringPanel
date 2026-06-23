import { useCallback } from "react"
import { Navigate, useLocation, useNavigate } from "react-router"

import {
  EdgeGatewaysTable,
  type EdgeGateway,
  useEdgeGateways,
} from "@/features/edge-gateways"
import { ErrorState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"

const EMPTY_GATEWAYS: EdgeGateway[] = []

export function EdgeGatewaysPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { data, error, isError, isLoading } = useEdgeGateways()
  const gateways = data ?? EMPTY_GATEWAYS

  const openGateway = useCallback((gatewayId: string) => {
    navigate(`/app/edge-gateways/${gatewayId}`)
  }, [navigate])

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Edge gateways could not be loaded. Please try again."

  if (location.pathname.endsWith("/")) {
    return <Navigate replace to="/app/edge-gateways" />
  }

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Monitor gateway connectivity, data freshness and machine coverage across the plant."
          title="Edge Gateways"
        />
        <PageContent>
          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Gateway list unavailable"
            />
          ) : (
            <EdgeGatewaysTable
              data={gateways}
              isLoading={isLoading}
              onRowClick={(gateway) => openGateway(gateway.id)}
              onViewDetail={openGateway}
            />
          )}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
