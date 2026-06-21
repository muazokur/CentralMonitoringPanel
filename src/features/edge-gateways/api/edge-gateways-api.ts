import { simulateNetwork } from "@/features/mock-utils"
import { edgeGatewaysMock } from "@/features/edge-gateways/mocks/edge-gateways.mock"
import type {
  EdgeGateway,
  EdgeGatewayFormValues,
} from "@/features/edge-gateways/types/edge-gateway.types"

export async function getEdgeGateways(): Promise<EdgeGateway[]> {
  return simulateNetwork(edgeGatewaysMock)
}

export async function getEdgeGatewayDetail(
  gatewayId: string,
): Promise<EdgeGateway | undefined> {
  return simulateNetwork(
    edgeGatewaysMock.find((gateway) => gateway.id === gatewayId),
  )
}

export async function createEdgeGateway(
  values: EdgeGatewayFormValues,
): Promise<EdgeGateway> {
  return simulateNetwork({
    ...values,
    id: `egw-${crypto.randomUUID()}`,
    status: "online",
    lastHeartbeat: new Date().toISOString(),
    connectedMachineCount: 0,
    dataReceiveStatus: "receiving",
  })
}

export async function updateEdgeGateway(
  gatewayId: string,
  values: EdgeGatewayFormValues,
): Promise<EdgeGateway> {
  return simulateNetwork({
    ...edgeGatewaysMock[0],
    ...values,
    id: gatewayId,
  })
}

export async function deleteEdgeGateway(gatewayId: string): Promise<{ id: string }> {
  return simulateNetwork({ id: gatewayId })
}
