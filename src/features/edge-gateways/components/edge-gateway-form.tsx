import type { Control } from "react-hook-form"

import {
  FormActions,
  FormCard,
  FormInput,
} from "@/shared/components/form"

import type { EdgeGatewayFormValues } from "@/features/edge-gateways/types/edge-gateway.types"

type EdgeGatewayFormProps = {
  control: Control<EdgeGatewayFormValues>
  isSubmitting?: boolean
  onCancel?: () => void
}

export function EdgeGatewayForm({
  control,
  isSubmitting,
  onCancel,
}: EdgeGatewayFormProps) {
  return (
    <FormCard
      description="Configure gateway identity and network information."
      title="Gateway details"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput control={control} label="Gateway name" name="name" />
        <FormInput control={control} label="IP address" name="ipAddress" />
        <FormInput control={control} label="Location" name="location" />
        <FormInput
          control={control}
          label="Firmware version"
          name="firmwareVersion"
        />
      </div>
      <FormActions isSubmitting={isSubmitting} onCancel={onCancel} />
    </FormCard>
  )
}
