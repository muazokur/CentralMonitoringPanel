# UI Guidelines

## Design Principles

- Build one consistent premium SaaS product, not isolated screens.
- Prioritize clarity, scanability, and operational confidence for industrial monitoring users.
- Use restrained contrast, subtle borders, soft shadows, clean typography, and predictable spacing.
- Keep motion minimal. Animations are allowed only for feedback, drawer/menu transitions, and lightweight state changes.
- Use shared components first. If a new visual pattern is needed, create it under `src/shared/components` before using it in a feature.

## Design Tokens

Tokens are defined in `src/styles/globals.css` and documented in `src/shared/constants/design-tokens.ts`.

- Colors: use semantic tokens such as `background`, `foreground`, `card`, `surface`, `primary`, `muted`, `accent`, `destructive`, and status tokens.
- Status colors: `success`, `warning`, `info`, `danger`, and `neutral` are the only allowed status tones.
- Spacing: use the shared page, card, form, and section spacing from `designTokens.spacing`.
- Typography: page titles, section titles, body text, captions, and metrics must use `designTokens.typography`.
- Radius: controls use `rounded-md`; cards and panels use `rounded-lg`; avoid larger radii unless the design system is updated.
- Shadows: cards use `shadow-card`; overlays, dropdowns, toasts, and dialogs use `shadow-popover`; avoid custom shadows.
- Layout widths: page content is capped at `max-w-7xl`; shell sidebar widths are `18rem` expanded and `5rem` collapsed.
- Charts: chart content belongs inside `ChartCard` with a bordered `bg-surface` plot area.

## Component Usage Rules

All pages must use the shared versions of these patterns:

- `AppLayout`, `Sidebar`, `Topbar`
- `PageContainer`, `PageHeader`, `PageContent`, `PageSection`
- `Card`, `Button`, `Input`, `Select`
- `DataTable`, `StatusBadge`, `MetricCard`, `ChartCard`
- `DataTableToolbar`, `DataTablePagination`, `DataTableColumnHeader`
- `FormCard`, `FormInput`, `FormSelect`, `FormTextarea`, `FormSwitch`, `FormDatePicker`, `FormActions`
- `FormField`, `EmptyState`, `LoadingState`, `ErrorState`, `PageLoader`
- `ToastProvider` / `useToast` for toast notifications
- `ConfirmDialog` for destructive or irreversible confirmation

Do not create page-specific colors, spacing, shadows, radii, typography scales, table densities, or form layouts.

## Layout Rules

- Protected application screens use `AppLayout`.
- Desktop uses a collapsible left sidebar and sticky topbar.
- Mobile uses a drawer sidebar opened from the topbar.
- Page content uses `PageContainer`, then `PageHeader`, then `PageContent`.
- Dashboard-like grids start mobile-first with one column, then wrap at tablet and desktop breakpoints.
- Keep touch targets at least `40px` tall.
- Topbar content should stay practical: navigation trigger, search/action area, theme toggle, and user menu.

## Page Patterns

- List pages: `PageHeader`, filter/search area, `Card` surface, `DataTable`, and `DataTablePagination`.
- Dashboard pages: `PageHeader`, responsive `MetricCard` grid, `ChartCard` rows, then recent activity, alerts, or health summary sections.
- Detail pages: `PageHeader`, summary `MetricCard` row, tabs when needed, detail `PageSection` groups, and history `DataTable`.
- Form pages: `PageHeader`, `FormCard`, validation via shared form fields, and `FormActions` as a sticky footer when the form is long.
- Empty pages: use `EmptyState` inside the same layout surface where content would appear.

### List Page Pattern

Use this sequence for all list and management pages:

1. `PageHeader` with title, description, and page-level actions.
2. `DataTable` toolbar search and feature filters.
3. Shared table surface with `DataTableColumnHeader` for sortable columns.
4. Row actions through column definitions.
5. `DataTablePagination`.

Never build custom table wrappers inside feature pages.

### Dashboard Page Pattern

Use this sequence for operational dashboards:

1. `PageHeader`.
2. Responsive `MetricCard` grid.
3. `ChartCard` sections for trends, OEE, quality, downtime, or throughput.
4. Recent activity, alerts, and health summaries using shared cards and tables.

Dashboard cards must wrap from one column on mobile to multi-column layouts on larger screens.
Dashboard pages should stay composition-only: domain-specific cards, charts, and summaries belong under the owning feature module and consume data from feature hooks.

### Detail Page Pattern

Use this sequence for gateway, machine, tag, user, or role detail pages:

1. `PageHeader` with identity and actions.
2. Summary `MetricCard` row.
3. Tabs only when the detail has genuinely separate views.
4. `PageSection` groups for configuration, live state, ownership, or permissions.
5. History or audit data through `DataTable`.

### Form Page Pattern

Use this sequence for create/edit pages:

1. `PageHeader`.
2. One `FormCard` per logical form area.
3. `FormInput`, `FormSelect`, `FormTextarea`, `FormSwitch`, and `FormDatePicker`.
4. Zod schema validation surfaced through shared field errors.
5. `FormActions` with loading submit state and cancel action.

Long forms may use sticky `FormActions`; short forms should use the standard card footer.

## Spacing Rules

- Page padding: `px-4 py-5`, `sm:px-6 sm:py-6`, `lg:px-8`.
- Section spacing: `space-y-6` between sections and `space-y-4` within sections.
- Card padding: `p-4 sm:p-5`.
- Form field spacing: `space-y-2` inside a field and `space-y-4` between fields.
- Table cells: compact operational density with `h-11` headers and `h-12` rows.

## Color Rules

- Use semantic colors only. Do not hardcode hex, RGB, HSL, or OKLCH values inside page components.
- Use `StatusBadge` for operational states instead of custom colored labels.
- Use `destructive` only for errors or destructive actions.
- Dark mode must work through token values, not page overrides.
- Avoid gradients and glassmorphism unless a later design-system prompt adds a reusable tokenized pattern.

## Typography Rules

- Page titles: `text-2xl sm:text-3xl font-semibold`.
- Section titles: `text-base font-semibold`.
- Body text: `text-sm leading-6`.
- Captions and metadata: `text-xs font-medium`.
- Metric values: `text-2xl font-semibold`.
- Letter spacing stays normal except uppercase metadata labels.

## Table Rules

- Use `DataTable` with TanStack Table column definitions.
- Tables must live in a bordered, rounded, responsive overflow container.
- Headers are muted, uppercase, and compact.
- Rows use subtle hover states and no heavy striping.
- Empty table results use `EmptyState`.
- Loading table results use `DataTableSkeleton`.
- Search and filters belong in `DataTableToolbar`.
- Pagination belongs in `DataTablePagination`.
- Sortable headers use `DataTableColumnHeader`.
- Status values use `StatusBadge status="..."`.
- Feature pages must not create custom table density or row styling.

## Form Rules

- Use `FormField` for label, help text, and error text.
- Use `FormInput`, `FormSelect`, `FormTextarea`, `FormSwitch`, and `FormDatePicker` for React Hook Form forms.
- Keep mobile forms single-column.
- Use two-column desktop forms only when fields are short and naturally grouped.
- Validation errors use `text-destructive`; do not invent warning/error colors.
- Use `FormCard` for form surfaces and `FormActions` for submit/cancel controls.
- Submit buttons must show loading state while mutations are pending.
- Date inputs use the shared native `FormDatePicker` until a tokenized calendar component is introduced.

## Do / Don't

Do:

- Compose pages from shared layout and page primitives.
- Add a reusable shared component before introducing a new visual pattern.
- Use `MetricCard` and `ChartCard` for dashboard surfaces.
- Use `StatusBadge` for states like online, offline, warning, stale, fresh, or alarm.
- Keep controls keyboard accessible with visible focus states.

Don't:

- Build one-off cards, tables, badges, or form rows inside feature pages.
- Add page-specific palettes, shadows, gradients, or typography.
- Use oversized marketing-style sections in operational screens.
- Hide important actions behind unclear icon-only controls without accessible labels.
- Create business pages before the shared component pattern exists.
