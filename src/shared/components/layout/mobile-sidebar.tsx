import { X } from "lucide-react"
import { Dialog } from "radix-ui"

import { navigationSections } from "@/shared/constants"
import { Button } from "@/shared/components/ui"
import { SidebarNavItem } from "@/shared/components/layout/sidebar-nav-item"

type MobileSidebarProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileSidebar({ isOpen, onOpenChange }: MobileSidebarProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-[2px] lg:hidden" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 flex w-80 max-w-[85vw] flex-col border-r bg-sidebar text-sidebar-foreground shadow-popover lg:hidden">
          <header className="flex h-16 items-center justify-between border-b border-white/10 px-4">
            <Dialog.Title className="text-sm font-semibold">
              Central Monitoring
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button
                aria-label="Close navigation"
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                size="icon"
                variant="ghost"
              >
                <X />
              </Button>
            </Dialog.Close>
          </header>
          <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
            {navigationSections.map((section) => (
              <div className="space-y-2" key={section.label}>
                <p className="px-3 text-xs font-medium text-sidebar-foreground/55">
                  {section.label}
                </p>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Dialog.Close asChild key={item.href}>
                      <SidebarNavItem item={item} />
                    </Dialog.Close>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
