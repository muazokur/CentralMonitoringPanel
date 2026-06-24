import { Menu, Moon, PanelLeftClose, PanelLeftOpen, Search, Sun } from "lucide-react"
import { useTranslation } from "react-i18next"

import { LanguageSelector } from "@/shared/components/layout/language-selector"
import { UserMenu } from "@/shared/components/layout/user-menu"
import { Button, Input } from "@/shared/components/ui"
import { useTheme } from "@/shared/theme"

type TopbarProps = {
  isSidebarCollapsed: boolean
  onOpenMobileSidebar: () => void
  onToggleSidebar: () => void
}

export function Topbar({
  isSidebarCollapsed,
  onOpenMobileSidebar,
  onToggleSidebar,
}: TopbarProps) {
  const { t } = useTranslation("common")
  const { resolvedTheme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-6">
      <Button
        aria-label={t("topbar.openNavigation")}
        className="lg:hidden"
        onClick={onOpenMobileSidebar}
        size="icon"
        variant="ghost"
      >
        <Menu />
      </Button>
      <Button
        aria-label={
          isSidebarCollapsed
            ? t("topbar.expandSidebar")
            : t("topbar.collapseSidebar")
        }
        className="hidden lg:inline-flex"
        onClick={onToggleSidebar}
        size="icon"
        variant="ghost"
      >
        {isSidebarCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </Button>

      <div className="relative hidden w-full max-w-md sm:block">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          aria-label={t("topbar.searchLabel")}
          className="pl-9"
          placeholder={t("topbar.searchPlaceholder")}
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button
          aria-label={t("topbar.toggleTheme")}
          onClick={toggleTheme}
          size="icon"
          variant="ghost"
        >
          {resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <LanguageSelector />
        <UserMenu />
      </div>
    </header>
  )
}
