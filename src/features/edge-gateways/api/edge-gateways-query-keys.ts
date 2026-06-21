export const edgeGatewaysQueryKeys = {
  all: ["edge-gateways"] as const,
  lists: () => [...edgeGatewaysQueryKeys.all, "list"] as const,
  detail: (gatewayId: string) =>
    [...edgeGatewaysQueryKeys.all, "detail", gatewayId] as const,
}
