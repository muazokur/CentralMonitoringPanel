import type { ReactNode } from "react"

import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"

type PageShellProps = {
  title: string
  description?: string
  actions?: ReactNode
  children: ReactNode
  className?: string
}

export function PageShell({
  title,
  description,
  actions,
  children,
  className,
}: PageShellProps) {
  return (
    <PageContainer className={className}>
      <PageHeader actions={actions} description={description} title={title} />
      <PageContent>{children}</PageContent>
    </PageContainer>
  )
}
