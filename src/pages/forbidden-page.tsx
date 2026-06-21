import { ShieldAlert } from "lucide-react"

import { ErrorPageShell } from "@/pages/error-page-shell"

export function ForbiddenPage() {
  return (
    <ErrorPageShell
      code="403"
      description="You do not have permission to access this workspace area."
      icon={ShieldAlert}
      title="Access restricted"
      tone="warning"
    />
  )
}
