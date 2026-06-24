import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm, type Resolver } from "react-hook-form"

import {
  SettingsForm,
  settingsFormSchema,
  useSettings,
  useUpdateSettings,
  type SettingsFormValues,
} from "@/features/settings"
import { usePermission } from "@/shared/auth"
import { EmptyState, ErrorState, LoadingState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"
import { useToast } from "@/shared/components/ui"
import { PERMISSIONS } from "@/shared/constants"

export function SettingsPage() {
  const { showToast } = useToast()
  const { can } = usePermission()
  const canManageSettings = can(PERMISSIONS.settingsManage)
  const { data: settings, error, isError, isLoading } = useSettings()
  const updateSettingsMutation = useUpdateSettings()
  const { control, handleSubmit, reset } = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema) as Resolver<SettingsFormValues>,
  })

  useEffect(() => {
    if (settings) {
      reset(settings)
    }
  }, [reset, settings])

  function saveSettings(values: SettingsFormValues) {
    updateSettingsMutation.mutate(values, {
      onError: () => {
        showToast({
          description: "Settings could not be saved. Please try again.",
          title: "Save failed",
          tone: "danger",
        })
      },
      onSuccess: (updatedSettings) => {
        reset(updatedSettings)
        showToast({
          description: "Platform settings were saved successfully.",
          title: "Settings saved",
          tone: "success",
        })
      },
    })
  }

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Settings could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Configure system, API, theme and notification defaults."
          title="Settings"
        />
        <PageContent>
          {isLoading ? (
            <LoadingState label="Loading settings" variant="skeleton" />
          ) : null}

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Settings unavailable"
            />
          ) : null}

          {!isLoading && !isError && !settings ? (
            <EmptyState
              description="No settings profile is available yet."
              title="No settings found"
            />
          ) : null}

          {settings ? (
            <form onSubmit={handleSubmit(saveSettings)}>
              <SettingsForm
                control={control}
                disabled={!canManageSettings || updateSettingsMutation.isPending}
                isSubmitting={updateSettingsMutation.isPending}
              />
            </form>
          ) : null}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
