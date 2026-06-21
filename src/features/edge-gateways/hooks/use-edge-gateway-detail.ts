import { useQuery } from "@tanstack/react-query"

import { getEdgeGatewayDetail } from "@/features/edge-gateways/api/edge-gateways-api"
import { edgeGatewaysQueryKeys } from "@/features/edge-gateways/api/edge-gateways-query-keys"

export function useEdgeGatewayDetail(gatewayId: string) {
  return useQuery({
    enabled: Boolean(gatewayId),
    queryFn: () => getEdgeGatewayDetail(gatewayId),
    queryKey: edgeGatewaysQueryKeys.detail(gatewayId),
  })
}
