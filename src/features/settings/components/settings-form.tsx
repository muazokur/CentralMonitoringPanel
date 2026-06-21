import type { Control } from "react-hook-form"

import {
  FormActions,
  FormCard,
  FormInput,
  FormSwitch,
} from "@/shared/components/form"

import type { SettingsFormValues } from "@/features/settings/types/settings.types"

type SettingsFormProps = {
  control: Control<SettingsFormValues>
  isSubmitting?: boolean
}

export function SettingsForm({ control, isSubmitting }: SettingsFormProps) {
  return (
    <FormCard
      description="Configure plant-level defaults for monitoring and reporting."
      title="Platform settings"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput control={control} label="Plant name" name="plantName" />
        <FormInput control={control} label="Timezone" name="timezone" />
        <FormInput
          control={control}
          label="OEE target"
          name="oeeTarget"
          type="number"
        />
        <FormInput
          control={control}
          label="Data retention days"
          name="dataRetentionDays"
          type="number"
        />
        <FormSwitch
          className="md:col-span-2"
          control={control}
          description="Enable alert notification delivery once backend channels are configured."
          label="Alert notifications"
          name="alertNotificationsEnabled"
        />
      </div>
      <FormActions isSubmitting={isSubmitting} />
    </FormCard>
  )
}
