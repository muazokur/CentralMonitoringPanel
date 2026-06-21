import type { Control } from "react-hook-form"

import {
  FormActions,
  FormCard,
  FormInput,
  FormTextarea,
} from "@/shared/components/form"

import type { RoleFormValues } from "@/features/roles/types/role.types"

type RoleFormProps = {
  control: Control<RoleFormValues>
  isSubmitting?: boolean
  onCancel?: () => void
}

export function RoleForm({ control, isSubmitting, onCancel }: RoleFormProps) {
  return (
    <FormCard
      description="Define the role identity. Permission selection will be wired to backend metadata later."
      title="Role details"
    >
      <div className="grid gap-4">
        <FormInput control={control} label="Role name" name="name" />
        <FormTextarea
          control={control}
          label="Description"
          name="description"
        />
      </div>
      <FormActions isSubmitting={isSubmitting} onCancel={onCancel} />
    </FormCard>
  )
}
