import { useQuery } from "@tanstack/react-query"

import { getMachines } from "@/features/machines/api/machines-api"
import { machinesQueryKeys } from "@/features/machines/api/machines-query-keys"

export function useMachines() {
  return useQuery({
    queryFn: getMachines,
    queryKey: machinesQueryKeys.lists(),
  })
}
