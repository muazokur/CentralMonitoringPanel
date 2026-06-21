# Frontend Architecture

## Folder Structure

- `src/app`: application composition, provider wiring, routing, and app-level config.
- `src/pages`: route-level page components. Pages compose shared layout and feature modules.
- `src/features`: feature-owned business code. Future feature modules live here before being composed by pages.
- `src/shared`: reusable infrastructure and UI primitives: API, auth, layout, page, feedback, charts, forms, tables, constants, hooks, lib, and types.
- `src/styles`: global Tailwind and design token definitions.
- `docs`: frontend architecture and UI guidelines.

## App Layer

- `src/app/App.tsx` renders `AppProviders` and `AppRouter`.
- `src/app/config/env.ts` safely reads Vite environment variables and supplies defaults.
- `src/app/config/app-config.ts` stores app-level metadata and default navigation targets.
- App code may compose shared modules, but shared modules should not depend on page or feature modules.

## Providers

- `app-providers.tsx` is the single provider composition point.
- `query-provider.tsx` wires TanStack Query and the shared `queryClient`.
- `theme-provider.tsx` adapts the shared light/dark/system theme provider for the app layer.
- `auth-provider.tsx` adapts the shared auth session provider for the app layer.
- Toast infrastructure is mounted globally through the shared `ToastProvider`.

## Router

- `src/app/router/routes.tsx` owns the browser router.
- `route-paths.ts` re-exports the canonical route constants from shared constants.
- `protected-route.tsx` protects `/app/*` routes and redirects unauthenticated users to `/login`.
- `public-route.tsx` redirects authenticated users away from public auth routes.
- `not-found-route.tsx` normalizes unknown URLs to `/404`.

## Route Protection

- Protected pages live under `/app`.
- Unauthenticated access redirects to `/login` and preserves the attempted location in route state.
- Role and permission checks are supported by `ProtectedRoute`; failures redirect to `/403`.
- Public auth routes should be wrapped in `PublicRoute`.

## Page Pattern

- Protected pages use `AppLayout`.
- Page structure is `PageContainer` -> `PageHeader` -> `PageContent`.
- Placeholder pages use `EmptyState` until feature-specific UI is implemented.
- Error pages use the same card, badge, color, radius, and shadow tokens as the rest of the app.
- Pages must not introduce page-specific colors, spacing, shadows, typography scales, or table/form patterns.

## Current Routes

- `/login`
- `/app/dashboard`
- `/app/edge-gateways`
- `/app/edge-gateways/:edgeGatewayId`
- `/app/machines`
- `/app/machines/:machineId`
- `/app/tags`
- `/app/tag-value-history`
- `/app/oee`
- `/app/analytics`
- `/app/alerts`
- `/app/reports`
- `/app/users`
- `/app/roles`
- `/app/settings`
- `/403`, `/404`, `/500`

## Adding A New Page

1. Add the path to `src/shared/constants/routes.ts`.
2. Add navigation metadata to `src/shared/constants/navigation.ts` when the page should appear in the sidebar.
3. Create a route-level page in `src/pages`.
4. Register the route in `src/app/router/routes.tsx`.
5. For protected pages, compose with `AppLayout`, `PageContainer`, `PageHeader`, and `PageContent`.
6. Put business-specific logic in `src/features/<feature-name>` and import it into the page.
7. Reuse shared components before creating any new visual pattern.
