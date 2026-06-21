import type { ComponentProps } from "react"
import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form"

import { FormField } from "@/shared/components/form/form-field"
import { cn } from "@/shared/lib/utils"

type FormTextareaProps<TFieldValues extends FieldValues> = Omit<
  ComponentProps<"textarea">,
  "name" | "value" | "defaultValue"
> & {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  description?: string
}

export function FormTextarea<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  disabled,
  ...textareaProps
}: FormTextareaProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormField
          description={description}
          error={fieldState.error?.message}
          htmlFor={name}
          label={label}
        >
          <textarea
            {...textareaProps}
            className={cn(
              "flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
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
