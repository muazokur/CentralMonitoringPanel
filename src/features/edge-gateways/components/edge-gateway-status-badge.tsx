import { StatusBadge, type StatusBadgeStatus } from "@/shared/components/ui"

import type {
  DataReceiveStatus,
  EdgeGatewayStatus,
} from "@/features/edge-gateways/types/edge-gateway.types"

const gatewayStatusMap: Record<EdgeGatewayStatus, StatusBadgeStatus> = {
  offline: "offline",
  online: "online",
  warning: "warning",
}

const receiveStatusLabelMap: Record<DataReceiveStatus, string> = {
  delayed: "Delayed",
  receiving: "Receiving",
  stopped: "Stopped",
}

export function EdgeGatewayStatusBadge({
  status,
}: {
  status: EdgeGatewayStatus
}) {
  return <StatusBadge status={gatewayStatusMap[status]} />
}

export function DataReceiveStatusBadge({
  status,
}: {
  status: DataReceiveStatus
}) {
  const badgeStatus: StatusBadgeStatus =
    status === "receiving" ? "active" : status === "delayed" ? "warning" : "offline"

  return <StatusBadge status={badgeStatus}>{receiveStatusLabelMap[status]}</StatusBadge>
}
