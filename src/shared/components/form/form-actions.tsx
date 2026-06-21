import { LoaderCircle } from "lucide-react"

import { Button } from "@/shared/components/ui"
import { cn } from "@/shared/lib/utils"

type FormActionsProps = {
  submitLabel?: string
  cancelLabel?: string
  isSubmitting?: boolean
  submitDisabled?: boolean
  onCancel?: () => void
  sticky?: boolean
  className?: string
}

export function FormActions({
  submitLabel = "Save",
  cancelLabel = "Cancel",
  isSubmitting = false,
  submitDisabled = false,
  onCancel,
  sticky = false,
  className,
}: FormActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 border-t bg-card px-4 py-3 sm:flex-row sm:justify-end sm:px-5",
        sticky && "sticky bottom-0 z-10",
        className,
      )}
    >
      {onCancel ? (
        <Button
          disabled={isSubmitting}
          onClick={onCancel}
          type="button"
          variant="outline"
        >
          {cancelLabel}
        </Button>
      ) : null}
      <Button disabled={submitDisabled || isSubmitting} type="submit">
        {isSubmitting ? <LoaderCircle className="animate-spin" /> : null}
        {submitLabel}
      </Button>
    </div>
  )
}
