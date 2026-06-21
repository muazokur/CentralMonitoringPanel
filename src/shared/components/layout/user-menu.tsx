import { LogOut, Settings, User } from "lucide-react"
import { DropdownMenu } from "radix-ui"

import { Button } from "@/shared/components/ui"
import { useAuth } from "@/shared/auth"

export function UserMenu() {
  const { clearSession, user } = useAuth()
  const displayName = user?.displayName ?? "Operations"
  const email = user?.email ?? "monitoring.local"
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="gap-3 px-2 sm:px-3" variant="outline">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
            {initials}
          </span>
          <span className="hidden min-w-0 text-left sm:block">
            <span className="block truncate text-sm font-medium">
              {displayName}
            </span>
          </span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="z-50 min-w-56 rounded-lg border bg-popover p-1 text-popover-foreground shadow-popover"
          sideOffset={8}
        >
          <div className="border-b px-3 py-2">
            <p className="text-sm font-medium">{displayName}</p>
            <p className="text-xs text-muted-foreground">{email}</p>
          </div>
          <DropdownMenu.Item className="flex min-h-9 cursor-default items-center gap-2 rounded-md px-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground">
            <User className="size-4" />
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex min-h-9 cursor-default items-center gap-2 rounded-md px-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground">
            <Settings className="size-4" />
            Preferences
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item
            className="flex min-h-9 cursor-default items-center gap-2 rounded-md px-2 text-sm text-destructive outline-none transition-colors focus:bg-destructive/10"
            onSelect={clearSession}
          >
            <LogOut className="size-4" />
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
