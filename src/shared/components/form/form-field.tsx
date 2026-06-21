import type { ReactNode } from "react"

import { cn } from "@/shared/lib/utils"

type FormFieldProps = {
  label: string
  children: ReactNode
  description?: string
  error?: string
  htmlFor?: string
  className?: string
}

export function FormField({
  label,
  children,
  description,
  error,
  htmlFor,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm font-medium text-foreground" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {description && !error ? (
        <p className="text-xs leading-5 text-muted-foreground">{description}</p>
      ) : null}
      {error ? (
        <p className="text-xs font-medium leading-5 text-destructive">{error}</p>
      ) : null}
    </div>
  )
}
