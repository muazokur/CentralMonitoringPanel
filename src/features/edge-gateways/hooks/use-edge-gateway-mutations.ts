import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  createEdgeGateway,
  deleteEdgeGateway,
  updateEdgeGateway,
} from "@/features/edge-gateways/api/edge-gateways-api"
import { edgeGatewaysQueryKeys } from "@/features/edge-gateways/api/edge-gateways-query-keys"
import type { EdgeGatewayFormValues } from "@/features/edge-gateways/types/edge-gateway.types"

export function useCreateEdgeGateway() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createEdgeGateway,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: edgeGatewaysQueryKeys.all }),
  })
}

export function useUpdateEdgeGateway(gatewayId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (values: EdgeGatewayFormValues) =>
      updateEdgeGateway(gatewayId, values),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: edgeGatewaysQueryKeys.all }),
  })
}

export function useDeleteEdgeGateway() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteEdgeGateway,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: edgeGatewaysQueryKeys.all }),
  })
}
