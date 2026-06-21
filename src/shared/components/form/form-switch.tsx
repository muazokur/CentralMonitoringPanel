import { Switch as SwitchPrimitive } from "radix-ui"
import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form"

import { FormField } from "@/shared/components/form/form-field"
import { cn } from "@/shared/lib/utils"

type FormSwitchProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  description?: string
  disabled?: boolean
  className?: string
}

export function FormSwitch<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  disabled,
  className,
}: FormSwitchProps<TFieldValues>) {
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
          <SwitchPrimitive.Root
            checked={Boolean(field.value)}
            className={cn(
              "relative h-6 w-11 rounded-full border border-transparent bg-input transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
            )}
            disabled={disabled}
            name={field.name}
            onBlur={field.onBlur}
            onCheckedChange={field.onChange}
            ref={field.ref}
          >
            <SwitchPrimitive.Thumb className="block size-5 translate-x-0.5 rounded-full bg-background shadow-sm transition-transform data-[state=checked]:translate-x-5" />
          </SwitchPrimitive.Root>
        </FormField>
      )}
    />
  )
}
