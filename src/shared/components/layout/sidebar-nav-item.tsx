import { NavLink } from "react-router"

import type { NavigationItem } from "@/shared/constants"
import { cn } from "@/shared/lib/utils"

type SidebarNavItemProps = {
  item: NavigationItem
  isCollapsed?: boolean
}

export function SidebarNavItem({
  item,
  isCollapsed = false,
}: SidebarNavItemProps) {
  const Icon = item.icon

  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "group flex min-h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:outline-none",
          isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
          isCollapsed && "justify-center px-2",
        )
      }
      end={item.href === "/"}
      title={isCollapsed ? item.label : undefined}
      to={item.href}
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      {isCollapsed ? null : <span className="truncate">{item.label}</span>}
    </NavLink>
  )
}
