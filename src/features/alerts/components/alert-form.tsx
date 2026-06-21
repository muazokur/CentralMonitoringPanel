import type { Control } from "react-hook-form"

import {
  FormActions,
  FormCard,
  FormSelect,
  FormTextarea,
} from "@/shared/components/form"
import type { SelectOption } from "@/shared/types"

import type { AlertFormValues } from "@/features/alerts/types/alert.types"

const severityOptions: SelectOption[] = [
  { label: "Warning", value: "warning" },
  { label: "Critical", value: "critical" },
]

const statusOptions: SelectOption[] = [
  { label: "Active", value: "active" },
  { label: "Pending", value: "pending" },
  { label: "Resolved", value: "resolved" },
]

type AlertFormProps = {
  control: Control<AlertFormValues>
  machineOptions: SelectOption[]
  tagOptions: SelectOption[]
  isSubmitting?: boolean
  onCancel?: () => void
}

export function AlertForm({
  control,
  machineOptions,
  tagOptions,
  isSubmitting,
  onCancel,
}: AlertFormProps) {
  return (
    <FormCard
      description="Capture alert severity, source and lifecycle status."
      title="Alert details"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormSelect
          control={control}
          label="Severity"
          name="severity"
          options={severityOptions}
        />
        <FormSelect
          control={control}
          label="Status"
          name="status"
          options={statusOptions}
        />
        <FormSelect
          control={control}
          label="Machine"
          name="machineId"
          options={machineOptions}
        />
        <FormSelect control={control} label="Tag" name="tagId" options={tagOptions} />
        <FormTextarea
          className="md:col-span-2"
          control={control}
          label="Message"
          name="message"
        />
      </div>
      <FormActions isSubmitting={isSubmitting} onCancel={onCancel} />
    </FormCard>
  )
}
