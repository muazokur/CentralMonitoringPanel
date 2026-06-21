import type { Control } from "react-hook-form"

import {
  FormActions,
  FormCard,
  FormInput,
  FormSelect,
} from "@/shared/components/form"
import type { SelectOption } from "@/shared/types"

import type { MachineFormValues } from "@/features/machines/types/machine.types"

const statusOptions: SelectOption[] = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Warning", value: "warning" },
  { label: "Critical", value: "critical" },
]

type MachineFormProps = {
  control: Control<MachineFormValues>
  gatewayOptions: SelectOption[]
  isSubmitting?: boolean
  onCancel?: () => void
}

export function MachineForm({
  control,
  gatewayOptions,
  isSubmitting,
  onCancel,
}: MachineFormProps) {
  return (
    <FormCard
      description="Define the machine identity, gateway relation and operational status."
      title="Machine details"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput control={control} label="Machine name" name="name" />
        <FormInput control={control} label="Machine code" name="code" />
        <FormSelect
          control={control}
          label="Gateway"
          name="gatewayId"
          options={gatewayOptions}
        />
        <FormSelect
          control={control}
          label="Status"
          name="status"
          options={statusOptions}
        />
      </div>
      <FormActions isSubmitting={isSubmitting} onCancel={onCancel} />
    </FormCard>
  )
}
