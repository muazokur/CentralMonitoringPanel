import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form"

import { FormField } from "@/shared/components/form/form-field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui"
import type { SelectOption } from "@/shared/types"

type FormSelectProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  options: SelectOption[]
  description?: string
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function FormSelect<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  options,
  description,
  placeholder = "Select an option",
  disabled,
  className,
}: FormSelectProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormField
          className={className}
          description={description}
          error={fieldState.error?.message}
          label={label}
        >
          <Select
            disabled={disabled}
            name={field.name}
            onValueChange={field.onChange}
            value={field.value ? String(field.value) : ""}
          >
            <SelectTrigger onBlur={field.onBlur} ref={field.ref}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  disabled={option.disabled}
                  key={option.value}
                  value={String(option.value)}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
      )}
    />
  )
}
