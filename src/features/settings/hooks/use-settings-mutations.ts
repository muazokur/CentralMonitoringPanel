import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateSettings } from "@/features/settings/api/settings-api"
import { settingsQueryKeys } from "@/features/settings/api/settings-query-keys"

export function useUpdateSettings() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateSettings,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: settingsQueryKeys.all }),
  })
}
