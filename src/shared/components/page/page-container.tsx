import type { ReactNode } from "react"

import { cn } from "@/shared/lib/utils"

type PageContainerProps = {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8", className)}>
      {children}
    </div>
  )
}

export function PageContent({ children, className }: PageContainerProps) {
  return <div className={cn("space-y-6", className)}>{children}</div>
}
