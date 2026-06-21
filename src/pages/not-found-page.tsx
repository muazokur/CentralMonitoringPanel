import { SearchX } from "lucide-react"

import { ErrorPageShell } from "@/pages/error-page-shell"

export function NotFoundPage() {
  return (
    <ErrorPageShell
      code="404"
      description="The page you requested does not exist or has moved."
      icon={SearchX}
      title="Page not found"
      tone="info"
    />
  )
}
