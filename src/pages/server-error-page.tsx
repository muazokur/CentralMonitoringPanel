import { ServerCrash } from "lucide-react"

import { ErrorPageShell } from "@/pages/error-page-shell"

export function ServerErrorPage() {
  return (
    <ErrorPageShell
      code="500"
      description="Something went wrong while loading the application area."
      icon={ServerCrash}
      title="System error"
      tone="danger"
    />
  )
}
