import { X } from "lucide-react"
import { Toast } from "radix-ui"
import { useCallback, useMemo, useState, type ReactNode } from "react"

import { Button } from "@/shared/components/ui/button"
import {
  ToastContext,
  type ToastContextValue,
  type ToastMessage,
  type ToastTone,
} from "@/shared/components/ui/toast-context"
import { cn } from "@/shared/lib/utils"

type ToastProviderProps = {
  children: ReactNode
}

const toneClasses: Record<ToastTone, string> = {
  default: "border-border bg-popover text-popover-foreground",
  success:
    "border-status-success/30 bg-popover text-popover-foreground [--toast-accent:var(--status-success)]",
  warning:
    "border-status-warning/35 bg-popover text-popover-foreground [--toast-accent:var(--status-warning)]",
  danger:
    "border-status-danger/35 bg-popover text-popover-foreground [--toast-accent:var(--status-danger)]",
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    )
  }, [])

  const showToast = useCallback((toast: Omit<ToastMessage, "id">) => {
    const id = crypto.randomUUID()

    setToasts((currentToasts) => [...currentToasts, { ...toast, id }])
  }, [])

  const value = useMemo<ToastContextValue>(
    () => ({
      showToast,
    }),
    [showToast],
  )

  return (
    <Toast.Provider swipeDirection="right">
      <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
      {toasts.map((toast) => (
        <Toast.Root
          className={cn(
            "grid w-[calc(100vw-2rem)] max-w-sm grid-cols-[1fr_auto] gap-3 rounded-lg border p-4 shadow-popover",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out",
            toneClasses[toast.tone ?? "default"],
          )}
          key={toast.id}
          onOpenChange={(open) => {
            if (!open) {
              removeToast(toast.id)
            }
          }}
        >
          <div
            className={cn(
              "h-1 w-12 rounded-full bg-primary",
              toast.tone && toast.tone !== "default" && "bg-[--toast-accent]",
            )}
          />
          <Toast.Close asChild>
            <Button
              aria-label="Close toast"
              className="row-span-2 -mr-2 -mt-2"
              size="icon"
              variant="ghost"
            >
              <X />
            </Button>
          </Toast.Close>
          <div className="min-w-0">
            <Toast.Title className="text-sm font-semibold">
              {toast.title}
            </Toast.Title>
            {toast.description ? (
              <Toast.Description className="mt-1 text-sm leading-6 text-muted-foreground">
                {toast.description}
              </Toast.Description>
            ) : null}
          </div>
        </Toast.Root>
      ))}
      <Toast.Viewport className="fixed right-4 bottom-4 z-50 flex max-h-svh flex-col gap-3 outline-none" />
    </Toast.Provider>
  )
}
