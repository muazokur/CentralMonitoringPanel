import { createContext } from "react"

export type ToastTone = "default" | "success" | "warning" | "danger"

export type ToastMessage = {
  id: string
  title: string
  description?: string
  tone?: ToastTone
}

export type ToastContextValue = {
  showToast: (toast: Omit<ToastMessage, "id">) => void
}

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined,
)
