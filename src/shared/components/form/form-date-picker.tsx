import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form"
import type { ComponentProps } from "react"

import { FormField } from "@/shared/components/form/form-field"
import { Input } from "@/shared/components/ui"

type FormDatePickerProps<TFieldValues extends FieldValues> = Omit<
  ComponentProps<typeof Input>,
  "name" | "type" | "value" | "defaultValue"
> & {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  description?: string
}

export function FormDatePicker<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  disabled,
  ...inputProps
}: FormDatePickerProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormField
          className={className}
          description={description}
          error={fieldState.error?.message}
          htmlFor={name}
          label={label}
        >
          <Input
            {...inputProps}
            disabled={disabled}
            id={name}
            name={field.name}
            onBlur={field.onBlur}
            onChange={field.onChange}
            ref={field.ref}
            type="date"
            value={field.value ?? ""}
          />
        </FormField>
      )}
    />
  )
}
