# Frontend Architecture

## Folder Structure

- `src/app`: app composition, providers, routing, and app-level config.
- `src/pages`: thin route-level pages that compose shared layout and feature modules.
- `src/features`: feature-owned API functions, hooks, schemas, components, and types.
- `src/shared`: reusable API, auth, UI, layout, page, feedback, chart, form, table, constants, hooks, lib, and types.
- `src/styles`: Tailwind and semantic design tokens.

## App Layer

- `src/app/App.tsx` renders `AppProviders` and `AppRouter`.
- `src/app/config/env.ts` reads Vite environment variables safely and supplies defaults.
- `src/app/config/app-config.ts` stores app metadata and default navigation targets.
- `src/app/providers` adapts shared providers for query, theme, auth, and toast composition.

## API Layer

- `src/shared/api/http-client.ts` owns Axios configuration, timeout, Bearer token injection, response handling, and typed helpers.
- `src/shared/api/api-error.ts` normalizes Axios, network, server, and unknown errors into `ApiError`.
- `src/shared/api/endpoints.ts` centralizes backend paths such as auth endpoints.
- `src/shared/api/api-response.types.ts` exports common response types.
- `401` responses clear the session and redirect to `/login`; `403` responses redirect to `/403`.
- Feature API modules should call `apiGet`, `apiPost`, or `httpClient` instead of creating new Axios instances.

## Auth Flow

- `/login` is a public route and redirects authenticated users to `/app/dashboard`.
- `LoginForm` uses React Hook Form and Zod validation.
- `useLogin` calls the auth API, stores the returned session, hydrates the current-user query, and redirects to the attempted protected route or dashboard.
- `useLogout` calls the logout API, clears session/token state, clears auth queries, and redirects to `/login`.
- `token-storage.ts` stores access/refresh tokens; `auth-session.ts` stores the full session for this foundation stage.
- Until real endpoints are configured through `VITE_API_BASE_URL`, auth functions return a local mock session with broad development permissions.

## Permission System

- Permission constants live in `src/shared/constants/permissions.ts`.
- `ProtectedRoute` supports route-level permissions and redirects denied users to `/403`.
- `PermissionGuard` supports component/action-level access control with hide or disabled behavior.
- `usePermission` exposes `can`, `canAny`, and `canAll`.
- Permission strings are plain constants, for example `PERMISSIONS.machinesCreate`.

## Router

- `src/app/router/routes.tsx` owns the browser router.
- `route-paths.ts` re-exports canonical route constants.
- Protected pages live under `/app`.
- Unknown routes normalize to `/404`.
- Error routes `/403`, `/404`, and `/500` use the same design tokens and card language as the app.

## Page Pattern

- Protected pages use `AppLayout`.
- Page structure is `PageContainer` -> `PageHeader` -> `PageContent`.
- Placeholder pages use `EmptyState` until feature-specific UI is implemented.
- Pages must not introduce page-specific colors, spacing, shadows, typography scales, or table/form patterns.

## Adding A New API Hook

1. Add endpoint constants to `src/shared/api/endpoints.ts`.
2. Create feature API functions under `src/features/<feature>/api`.
3. Add query keys under the feature API folder.
4. Create a hook under `src/features/<feature>/hooks` using TanStack Query or Mutation.
5. Normalize errors through the shared API client; do not catch and reshape errors in pages.

## Protecting A Route

1. Add the path to `src/shared/constants/routes.ts`.
2. Add the permission to `src/shared/constants/permissions.ts` if needed.
3. Register the route in `src/app/router/routes.tsx`.
4. Wrap the page element with `ProtectedRoute requiredPermissions={[PERMISSIONS.example]}`.

## Using PermissionGuard

```tsx
<PermissionGuard permission={PERMISSIONS.machinesCreate}>
  <Button>Create machine</Button>
</PermissionGuard>

<PermissionGuard
  behavior="disable"
  permission={[PERMISSIONS.usersManage, PERMISSIONS.rolesManage]}
  mode="any"
>
  <Button>Manage access</Button>
</PermissionGuard>
```

Use `PermissionGuard` for buttons, page actions, secondary panels, and feature fragments. Keep route protection in the router.
