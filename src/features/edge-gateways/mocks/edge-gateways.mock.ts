import type { EdgeGateway } from "@/features/edge-gateways/types/edge-gateway.types"

export const edgeGatewaysMock: EdgeGateway[] = [
  {
    id: "egw-istanbul-01",
    name: "Istanbul Paint Line Gateway",
    status: "online",
    lastHeartbeat: "2026-06-21T09:42:12.000Z",
    ipAddress: "10.20.4.18",
    connectedMachineCount: 12,
    dataReceiveStatus: "receiving",
    firmwareVersion: "2.8.4",
    location: "Paint Shop / Line A",
  },
  {
    id: "egw-press-02",
    name: "Press Shop Gateway 02",
    status: "warning",
    lastHeartbeat: "2026-06-21T09:37:44.000Z",
    ipAddress: "10.20.8.42",
    connectedMachineCount: 8,
    dataReceiveStatus: "delayed",
    firmwareVersion: "2.7.9",
    location: "Press Shop / Cell 2",
  },
  {
    id: "egw-pack-03",
    name: "Packaging Gateway 03",
    status: "offline",
    lastHeartbeat: "2026-06-21T08:58:02.000Z",
    ipAddress: "10.20.12.9",
    connectedMachineCount: 5,
    dataReceiveStatus: "stopped",
    firmwareVersion: "2.8.1",
    location: "Packaging / Zone C",
  },
]
