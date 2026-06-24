# UI Guidelines

## Design Principles

- Build one consistent premium industrial SaaS product, not isolated admin screens.
- Prioritize scanability, calm hierarchy, operational confidence, and responsive usability.
- Use semantic design tokens, subtle borders, soft shadows, compact density, and clean typography.
- Keep business pages composition-only. Domain-specific UI belongs in feature components; visual primitives belong in shared components.
- Avoid placeholder copy in shipped screens. Empty, loading, disabled, and unavailable states must sound production-ready.

## Token Rules

- Colors come from semantic Tailwind/shadcn tokens only: `background`, `foreground`, `card`, `surface`, `muted`, `primary`, `accent`, `destructive`, and status tokens.
- Status colors are limited to `neutral`, `success`, `warning`, `info`, and `danger`.
- Cards use `rounded-lg`, subtle borders, `bg-card`, and `shadow-card`.
- Controls use `rounded-md`, shared focus rings, and at least `40px` touch targets.
- Charts must render inside `ChartCard`; metrics must use `MetricCard`; operational state labels must use `StatusBadge`.
- Progress indicators must use shared `ProgressBar`, not custom per-card bars.
- Do not add page-specific palettes, shadows, font scales, table density, or one-off card styles.

## Required Page Shell

Every protected page must use:

1. `AppLayout`
2. `PageContainer`
3. `PageHeader`
4. `PageContent`
5. Shared feedback states: `LoadingState`, `ErrorState`, `EmptyState`

Pages should import data through feature hooks and compose feature components. Pages must not import mock files, call Axios/fetch directly, or define large business UI blocks.

## Component Usage

Use these shared components consistently:

- Layout: `AppLayout`, `Sidebar`, `Topbar`, `PageContainer`, `PageHeader`, `PageContent`, `PageSection`
- Surfaces: `Card`, `FormCard`, `MetricCard`, `ChartCard`
- Tables: `DataTable`, `DataTableToolbar`, `DataTablePagination`, `DataTableColumnHeader`
- Forms: `FormInput`, `FormSelect`, `FormTextarea`, `FormSwitch`, `FormDatePicker`, `FormActions`
- Feedback: `LoadingState`, `ErrorState`, `EmptyState`, `PageLoader`, `ToastProvider`, `ConfirmDialog`
- Access control: `PermissionGuard` for action-level create/edit/delete/save/review controls

## Page Patterns

List pages:

1. `PageHeader` with concise title and operational description.
2. Feature filter panel or `DataTableToolbar` search.
3. Shared `DataTable` with pagination and row actions.
4. `StatusBadge` for state columns.
5. `PermissionGuard` around create/edit/delete actions.

Dashboard pages:

1. `PageHeader`.
2. Responsive `MetricCard` grid.
3. `ChartCard` rows using Recharts.
4. Recent activity, alerts, health, or summary cards.
5. No page-specific chart containers.

Detail pages:

1. `PageHeader` with back/action controls.
2. Summary `MetricCard` row.
3. `PageSection` groups for relation, live state, alerts, history, or configuration.
4. History/value data through `DataTable`.
5. Tabs only when a detail view has genuinely separate modes.

Form and settings pages:

1. `PageHeader`.
2. One `FormCard` per logical form section.
3. Zod validation through React Hook Form.
4. `FormActions` for submit/cancel.
5. `PermissionGuard` for save/update actions.

## Tables

- Tables must use `DataTable`; feature pages must not build custom table wrappers.
- Use `DataTableColumnHeader` for sortable columns.
- Use row action columns for clear commands and shared `ConfirmDialog` for destructive actions.
- Keep row height, header density, hover state, responsive overflow, search, pagination, and empty/loading states from the shared table.
- Feature-level table components own column definitions; pages pass data and callbacks only.

## Forms

- Use shared form fields for labels, descriptions, validation errors, and disabled states.
- Keep mobile forms single-column and desktop forms two-column only where fields are short.
- Use `FormCard` sectioning for settings and multi-area forms.
- Submit buttons must show pending state and be permission-aware when the action is privileged.

## Permissions And Actions

- Route-level view access belongs in the router through `ProtectedRoute`.
- Action-level access belongs in feature components through `PermissionGuard`.
- Required manage permissions:
  - `users.manage` for user create/edit/delete.
  - `roles.manage` for role create/edit/delete.
  - `settings.manage` for settings save.
  - `alerts.manage` for alert review/manage actions.
- Prefer hidden actions for unavailable permissions; use disabled behavior only when showing the action context is useful.

## Do / Don't

Do:

- Compose pages from shared layout, page, feedback, table, form, card, and chart primitives.
- Put reusable domain UI under the owning feature module.
- Use polished empty/error/loading/toast copy.
- Keep all mock data behind feature API functions.

Don't:

- Add page-specific colors, gradients, shadows, or table/form styling.
- Put mock arrays, API calls, or large business logic directly in pages.
- Ship text like “coming soon”, “wired later”, or “mock mode” in user-facing UI.
- Create duplicate components when a shared primitive already exists.
