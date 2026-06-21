import { useQuery } from "@tanstack/react-query"

import { getSettings } from "@/features/settings/api/settings-api"
import { settingsQueryKeys } from "@/features/settings/api/settings-query-keys"

export function useSettings() {
  return useQuery({
    queryFn: getSettings,
    queryKey: settingsQueryKeys.profile(),
  })
}
