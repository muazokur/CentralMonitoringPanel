import { useQuery } from "@tanstack/react-query"

import { getMachineDetail } from "@/features/machines/api/machines-api"
import { machinesQueryKeys } from "@/features/machines/api/machines-query-keys"

export function useMachineDetail(machineId: string) {
  return useQuery({
    enabled: Boolean(machineId),
    queryFn: () => getMachineDetail(machineId),
    queryKey: machinesQueryKeys.detail(machineId),
  })
}
