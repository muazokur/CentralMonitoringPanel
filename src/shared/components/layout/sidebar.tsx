import { Factory, PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { SidebarNavItem } from "@/shared/components/layout/sidebar-nav-item"
import { Button } from "@/shared/components/ui"
import { navigationSections } from "@/shared/constants"
import { cn } from "@/shared/lib/utils"

type SidebarProps = {
  isCollapsed: boolean
  onToggleCollapse: () => void
}

export function Sidebar({ isCollapsed, onToggleCollapse }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-white/10 bg-sidebar text-sidebar-foreground transition-[width] duration-200 lg:flex",
        isCollapsed ? "w-20" : "w-72",
      )}
    >
      <header className="flex h-16 items-center justify-between border-b border-white/10 px-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
            <Factory className="size-5" aria-hidden="true" />
          </div>
          {isCollapsed ? null : (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Central Monitor</p>
              <p className="truncate text-xs text-sidebar-foreground/55">
                Industrial IoT
              </p>
            </div>
          )}
        </div>
        <Button
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={cn(
            "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            isCollapsed && "mx-auto",
          )}
          onClick={onToggleCollapse}
          size="icon"
          variant="ghost"
        >
          {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
        </Button>
      </header>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {navigationSections.map((section) => (
          <div className="space-y-2" key={section.label}>
            {isCollapsed ? null : (
              <p className="px-3 text-xs font-medium text-sidebar-foreground/55">
                {section.label}
              </p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarNavItem
                  isCollapsed={isCollapsed}
                  item={item}
                  key={item.href}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
