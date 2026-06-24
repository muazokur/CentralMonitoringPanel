import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog } from "radix-ui"
import { useEffect, type ReactNode } from "react"
import { useForm } from "react-hook-form"

import { UserForm } from "@/features/users/components/user-form"
import { userFormSchema } from "@/features/users/schemas/user-form-schema"
import type {
  PlatformUser,
  UserFormValues,
} from "@/features/users/types/user.types"
import { Button } from "@/shared/components/ui"
import type { SelectOption } from "@/shared/types"

type UserFormDialogProps = {
  open: boolean
  mode: "create" | "edit"
  user?: PlatformUser | null
  roleOptions: SelectOption[]
  isSubmitting?: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (values: UserFormValues) => void
  trigger?: ReactNode
}

const createDefaults: UserFormValues = {
  email: "",
  fullName: "",
  roleId: "",
  status: "active",
}

function getDefaultValues(user?: PlatformUser | null): UserFormValues {
  if (!user) {
    return createDefaults
  }

  return {
    email: user.email,
    fullName: user.fullName,
    roleId: user.role,
    status: user.status,
  }
}

export function UserFormDialog({
  open,
  mode,
  user,
  roleOptions,
  isSubmitting,
  onOpenChange,
  onSubmit,
  trigger,
}: UserFormDialogProps) {
  const { control, handleSubmit, reset } = useForm<UserFormValues>({
    defaultValues: getDefaultValues(user),
    resolver: zodResolver(userFormSchema),
  })

  useEffect(() => {
    if (open) {
      reset(getDefaultValues(user))
    }
  }, [open, reset, user])

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-popover text-popover-foreground shadow-popover focus-visible:outline-none">
          <form onSubmit={handleSubmit(onSubmit)}>
            <UserForm
              control={control}
              isSubmitting={isSubmitting}
              onCancel={() => onOpenChange(false)}
              roleOptions={roleOptions}
            />
          </form>
          <Dialog.Close asChild>
            <Button className="sr-only" type="button">
              Close {mode === "create" ? "create user" : "edit user"}
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
