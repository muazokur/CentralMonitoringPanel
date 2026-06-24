import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog } from "radix-ui"
import { useEffect, type ReactNode } from "react"
import { useForm } from "react-hook-form"

import { RoleForm } from "@/features/roles/components/role-form"
import { roleFormSchema } from "@/features/roles/schemas/role-form-schema"
import type { Role, RoleFormValues } from "@/features/roles/types/role.types"
import { Button } from "@/shared/components/ui"

type RoleFormDialogProps = {
  open: boolean
  mode: "create" | "edit"
  role?: Role | null
  isSubmitting?: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (values: RoleFormValues) => void
  trigger?: ReactNode
}

const createDefaults: RoleFormValues = {
  description: "",
  name: "",
  permissions: [],
}

function getDefaultValues(role?: Role | null): RoleFormValues {
  if (!role) {
    return createDefaults
  }

  return {
    description: role.description,
    name: role.name,
    permissions: Array.from({ length: role.permissionCount }, (_, index) =>
      `permission-${index + 1}`,
    ),
  }
}

export function RoleFormDialog({
  open,
  mode,
  role,
  isSubmitting,
  onOpenChange,
  onSubmit,
  trigger,
}: RoleFormDialogProps) {
  const { control, handleSubmit, reset } = useForm<RoleFormValues>({
    defaultValues: getDefaultValues(role),
    resolver: zodResolver(roleFormSchema),
  })

  useEffect(() => {
    if (open) {
      reset(getDefaultValues(role))
    }
  }, [open, reset, role])

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-popover text-popover-foreground shadow-popover focus-visible:outline-none">
          <form onSubmit={handleSubmit(onSubmit)}>
            <RoleForm
              control={control}
              isSubmitting={isSubmitting}
              onCancel={() => onOpenChange(false)}
            />
          </form>
          <Dialog.Close asChild>
            <Button className="sr-only" type="button">
              Close {mode === "create" ? "create role" : "edit role"}
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
