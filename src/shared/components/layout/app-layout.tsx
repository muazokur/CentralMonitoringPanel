import { useState, type ReactNode } from "react"

import { MobileSidebar } from "@/shared/components/layout/mobile-sidebar"
import { Sidebar } from "@/shared/components/layout/sidebar"
import { Topbar } from "@/shared/components/layout/topbar"
import { cn } from "@/shared/lib/utils"

type AppLayoutProps = {
  children: ReactNode
}

type MainContentProps = {
  children: ReactNode
  isSidebarCollapsed?: boolean
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() =>
          setIsSidebarCollapsed((currentValue) => !currentValue)
        }
      />
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onOpenChange={setIsMobileSidebarOpen}
      />
      <div
        className={cn(
          "flex min-h-svh flex-col transition-[padding] duration-200 lg:pl-72",
          isSidebarCollapsed && "lg:pl-20",
        )}
      >
        <Topbar
          isSidebarCollapsed={isSidebarCollapsed}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          onToggleSidebar={() =>
            setIsSidebarCollapsed((currentValue) => !currentValue)
          }
        />
        <MainContent isSidebarCollapsed={isSidebarCollapsed}>
          {children}
        </MainContent>
      </div>
    </div>
  )
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="min-h-[calc(100svh-4rem)] flex-1 bg-surface">
      {children}
    </main>
  )
}
