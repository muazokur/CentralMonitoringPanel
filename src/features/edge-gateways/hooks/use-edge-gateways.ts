import { useQuery } from "@tanstack/react-query"

import { getEdgeGateways } from "@/features/edge-gateways/api/edge-gateways-api"
import { edgeGatewaysQueryKeys } from "@/features/edge-gateways/api/edge-gateways-query-keys"

export function useEdgeGateways() {
  return useQuery({
    queryFn: getEdgeGateways,
    queryKey: edgeGatewaysQueryKeys.lists(),
  })
}
