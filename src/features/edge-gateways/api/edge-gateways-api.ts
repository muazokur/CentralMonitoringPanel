import { simulateNetwork } from "@/features/mock-utils"
import {
  edgeGatewayDetailsMock,
  edgeGatewaysMock,
} from "@/features/edge-gateways/mocks/edge-gateways.mock"
import type {
  EdgeGateway,
  EdgeGatewayDetail,
  EdgeGatewayFormValues,
} from "@/features/edge-gateways/types/edge-gateway.types"

export async function getEdgeGateways(): Promise<EdgeGateway[]> {
  return simulateNetwork(edgeGatewaysMock)
}

export async function getEdgeGatewayDetail(
  gatewayId: string,
): Promise<EdgeGatewayDetail | null> {
  return simulateNetwork(
    edgeGatewayDetailsMock.find((gateway) => gateway.id === gatewayId) ?? null,
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
