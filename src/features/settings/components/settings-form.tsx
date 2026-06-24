import type { Control } from "react-hook-form"

import { PermissionGuard } from "@/shared/auth"
import {
  FormActions,
  FormCard,
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/shared/components/form"
import { PERMISSIONS } from "@/shared/constants"
import type { SelectOption } from "@/shared/types"

import type { SettingsFormValues } from "@/features/settings/types/settings.types"

const timezoneOptions: SelectOption[] = [
  { label: "Europe/Istanbul", value: "Europe/Istanbul" },
  { label: "UTC", value: "UTC" },
  { label: "Europe/Berlin", value: "Europe/Berlin" },
]

const themeOptions: SelectOption[] = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
]

type SettingsFormProps = {
  control: Control<SettingsFormValues>
  disabled?: boolean
  isSubmitting?: boolean
}

export function SettingsForm({
  control,
  disabled,
  isSubmitting,
}: SettingsFormProps) {
  return (
    <div className="space-y-6">
      <FormCard
        description="Configure plant-level defaults for monitoring and reporting."
        title="System settings"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput
            control={control}
            disabled={disabled}
            label="Plant name"
            name="plantName"
          />
          <FormSelect
            control={control}
            disabled={disabled}
            label="Timezone"
            name="timezone"
            options={timezoneOptions}
          />
          <FormInput
            control={control}
            disabled={disabled}
            label="OEE target"
            name="oeeTarget"
            type="number"
          />
          <FormInput
            control={control}
            disabled={disabled}
            label="Data retention days"
            name="dataRetentionDays"
            type="number"
          />
        </div>
      </FormCard>

      <FormCard
        description="Manage API connection defaults for platform services."
        title="API settings"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput
            className="md:col-span-2"
            control={control}
            disabled={disabled}
            label="API base URL"
            name="apiBaseUrl"
            type="url"
          />
          <FormInput
            control={control}
            disabled={disabled}
            label="Timeout"
            name="apiTimeoutMs"
            type="number"
          />
          <FormSwitch
            control={control}
            description="Enable periodic EdgeGateway synchronization for configured services."
            disabled={disabled}
            label="Gateway sync"
            name="gatewaySyncEnabled"
          />
        </div>
      </FormCard>

      <FormCard
        description="Control visual defaults used across monitoring workspaces."
        title="Theme settings"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormSelect
            control={control}
            disabled={disabled}
            label="Theme mode"
            name="themeMode"
            options={themeOptions}
          />
          <FormSwitch
            control={control}
            description="Use compact table spacing for high-density operational views."
            disabled={disabled}
            label="Dense tables"
            name="denseTablesEnabled"
          />
        </div>
      </FormCard>

      <FormCard
        description="Configure alert delivery behavior and escalation timing."
        title="Notification settings"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch
            control={control}
            description="Enable alert notification delivery once backend channels are configured."
            disabled={disabled}
            label="Alert notifications"
            name="alertNotificationsEnabled"
          />
          <FormInput
            control={control}
            disabled={disabled}
            label="Notification email"
            name="notificationEmail"
            type="email"
          />
          <FormInput
            control={control}
            disabled={disabled}
            label="Critical escalation"
            name="criticalAlertEscalationMinutes"
            type="number"
          />
        </div>
      </FormCard>

      <PermissionGuard
        behavior="disable"
        permission={PERMISSIONS.settingsManage}
      >
        <FormActions
          isSubmitting={isSubmitting}
          submitDisabled={disabled}
          submitLabel="Save settings"
        />
      </PermissionGuard>
    </div>
  )
}
