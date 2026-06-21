export const designTokens = {
  colors: {
    background: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    card: "bg-card text-card-foreground",
    muted: "bg-muted text-muted-foreground",
    primary: "bg-primary text-primary-foreground",
    success: "bg-status-success text-status-success-foreground",
    warning: "bg-status-warning text-status-warning-foreground",
    info: "bg-status-info text-status-info-foreground",
    danger: "bg-status-danger text-status-danger-foreground",
  },
  spacing: {
    pageX: "px-4 sm:px-6 lg:px-8",
    pageY: "py-5 sm:py-6",
    pageGap: "space-y-6",
    sectionGap: "space-y-4",
    cardPadding: "p-4 sm:p-5",
    formGap: "space-y-4",
  },
  typography: {
    pageTitle: "text-2xl font-semibold tracking-normal sm:text-3xl",
    sectionTitle: "text-base font-semibold tracking-normal",
    body: "text-sm leading-6",
    caption: "text-xs font-medium",
    metric: "text-2xl font-semibold tracking-normal",
  },
  radius: {
    control: "rounded-md",
    card: "rounded-lg",
    panel: "rounded-lg",
    badge: "rounded-md",
  },
  shadows: {
    card: "shadow-card",
    popover: "shadow-popover",
    soft: "shadow-soft",
  },
  layout: {
    pageMaxWidth: "max-w-7xl",
    sidebarWidth: "18rem",
    sidebarCollapsedWidth: "5rem",
    topbarHeight: "4rem",
  },
  table: {
    density: {
      compact: "h-10 px-3 py-2",
      comfortable: "h-12 px-4 py-3",
    },
  },
  chart: {
    minHeight: "min-h-72",
    container: "rounded-md border bg-surface p-3",
  },
} as const

export type StatusTone =
  | "neutral"
  | "success"
  | "warning"
  | "info"
  | "danger"
