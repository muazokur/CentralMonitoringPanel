import type { Control } from "react-hook-form"

import {
  FormActions,
  FormCard,
  FormInput,
  FormSelect,
} from "@/shared/components/form"
import type { SelectOption } from "@/shared/types"

import type { UserFormValues } from "@/features/users/types/user.types"

const statusOptions: SelectOption[] = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
]

type UserFormProps = {
  control: Control<UserFormValues>
  roleOptions: SelectOption[]
  isSubmitting?: boolean
  onCancel?: () => void
}

export function UserForm({
  control,
  roleOptions,
  isSubmitting,
  onCancel,
}: UserFormProps) {
  return (
    <FormCard
      description="Manage user identity, role and account status."
      title="User details"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput control={control} label="Full name" name="fullName" />
        <FormInput control={control} label="Email" name="email" type="email" />
        <FormSelect
          control={control}
          label="Role"
          name="roleId"
          options={roleOptions}
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
