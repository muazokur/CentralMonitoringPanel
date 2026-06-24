# Frontend Architecture

## Structure

- `src/app`: application composition, provider wiring, router, and app config.
- `src/pages`: thin route components that assemble layout and feature modules.
- `src/features`: business-facing modules with API functions, query hooks, schemas, mocks, types, and feature components.
- `src/shared`: reusable API/auth/layout/page/table/form/chart/feedback/ui utilities and constants.
- `src/styles`: global Tailwind import and semantic design tokens.

Protected pages follow:

```txt
AppLayout
  PageContainer
    PageHeader
    PageContent
      feature components
```

## Feature Modules

Every feature should use this shape:

```txt
features/<feature>/
  api/
  components/
  hooks/
  mocks/
  schemas/
  types/
  index.ts
```

- `types/` defines feature DTOs and form values.
- `mocks/` stores realistic in-memory data only for feature API functions.
- `api/` exposes mock-friendly functions that can later switch to shared HTTP helpers.
- `hooks/` wraps API functions with TanStack Query.
- `schemas/` stores Zod schemas for form-ready entities.
- `components/` contains reusable feature tables, cards, charts, forms, filters, and dialogs.
- `index.ts` exports the public feature surface used by pages.

Pages should import from feature `index.ts` files, not from mocks or nested implementation details unless a feature intentionally exposes them.

## Shared Layer

The shared layer owns reusable product primitives:

- API: `http-client`, error normalization, query client, common response types.
- Auth: session storage, token storage, auth provider, permission hooks, `PermissionGuard`.
- Layout/page: `AppLayout`, navigation shell, `PageContainer`, `PageHeader`, `PageSection`.
- UI: `Card`, `Button`, `Input`, `Select`, `StatusBadge`, `ProgressBar`, `ConfirmDialog`, toast provider.
- Data display: `DataTable`, pagination, toolbar, skeleton, empty state.
- Forms: React Hook Form-compatible fields and actions.
- Charts: `MetricCard` and `ChartCard`.

Shared components must be domain-neutral and token-based.

## API Layer

- `src/shared/api/http-client.ts` owns Axios configuration, timeout, Bearer token injection, response handling, `401` session clearing, and `403` redirects.
- Feature API functions currently return typed mock data through shared mock helpers.
- Feature hooks consume feature API functions and expose TanStack Query results directly.
- Pages render query states but do not call HTTP clients or reshape API errors.

To add an API hook:

1. Add or confirm endpoint constants if a real endpoint exists.
2. Add typed feature API functions.
3. Add feature query keys.
4. Add `useFeatureList`, `useFeatureDetail`, or mutation hooks.
5. Invalidate the feature root query key after successful mutations.
6. Render loading/error/empty states in the page or feature panel.

## Auth And Permissions

- `/login` is public and redirects authenticated users to the dashboard.
- `/app/*` routes are protected.
- Route-level permissions are configured in `src/app/router/routes.tsx`.
- Permission constants live in `src/shared/constants/permissions.ts`.
- `usePermission` exposes `can`, `canAny`, and `canAll`.
- `PermissionGuard` protects component-level and action-level UI.

Use route permissions for page access and `PermissionGuard` for buttons, table actions, form save actions, and privileged panels.

## Adding A Page

1. Add the route constant if needed.
2. Register the route with `ProtectedRoute` and required view permission.
3. Create a page in `src/pages` that uses `AppLayout`, `PageContainer`, `PageHeader`, and `PageContent`.
4. Consume feature hooks/components; do not import mocks or call API clients in the page.
5. Include loading, error, and empty states.
6. Keep visual styling in shared or feature components.

## Adding A Feature

1. Define types and mock data.
2. Add API functions and query keys.
3. Add hooks and mutation invalidation.
4. Add reusable feature components with shared UI primitives.
5. Add schemas and form components when the feature owns forms.
6. Export the public API from `index.ts`.
7. Compose the feature from route pages.

## Consistency Checklist

Before finishing a page or feature, verify:

- Protected pages use the shared layout shell.
- Lists use shared `DataTable`.
- Dashboards use `MetricCard` and `ChartCard`.
- Forms use shared form components and Zod validation.
- Actions are permission-guarded where required.
- Mock data stays inside feature mocks.
- API calls stay inside feature/shared API layers.
- No page-specific colors, shadows, table styles, or placeholder copy are introduced.
- `npm.cmd run lint` and `npm.cmd run build` pass.
