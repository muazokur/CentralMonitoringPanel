import type { Control } from "react-hook-form"

import {
  FormActions,
  FormCard,
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/shared/components/form"
import type { SelectOption } from "@/shared/types"

import type { TagFormValues } from "@/features/tags/types/tag.types"

const dataTypeOptions: SelectOption[] = [
  { label: "Boolean", value: "boolean" },
  { label: "Integer", value: "integer" },
  { label: "Float", value: "float" },
  { label: "String", value: "string" },
]

type TagFormProps = {
  control: Control<TagFormValues>
  gatewayOptions: SelectOption[]
  machineOptions: SelectOption[]
  isSubmitting?: boolean
  onCancel?: () => void
}

export function TagForm({
  control,
  gatewayOptions,
  machineOptions,
  isSubmitting,
  onCancel,
}: TagFormProps) {
  return (
    <FormCard
      description="Define tag metadata and connect it to a machine and gateway."
      title="Tag details"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput control={control} label="Tag name" name="name" />
        <FormInput control={control} label="Tag code" name="code" />
        <FormSelect
          control={control}
          label="Data type"
          name="dataType"
          options={dataTypeOptions}
        />
        <FormInput control={control} label="Unit" name="unit" />
        <FormSelect
          control={control}
          label="Machine"
          name="machineId"
          options={machineOptions}
        />
        <FormSelect
          control={control}
          label="Gateway"
          name="gatewayId"
          options={gatewayOptions}
        />
        <FormSwitch control={control} label="Active tag" name="isActive" />
      </div>
      <FormActions isSubmitting={isSubmitting} onCancel={onCancel} />
    </FormCard>
  )
}
