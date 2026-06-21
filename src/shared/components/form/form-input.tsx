import type { ComponentProps } from "react"
import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form"

import { FormField } from "@/shared/components/form/form-field"
import { Input } from "@/shared/components/ui"

type FormInputProps<TFieldValues extends FieldValues> = Omit<
  ComponentProps<typeof Input>,
  "name" | "value" | "defaultValue"
> & {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  description?: string
}

export function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  disabled,
  ...inputProps
}: FormInputProps<TFieldValues>) {
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
            value={field.value ?? ""}
          />
        </FormField>
      )}
    />
  )
}
