# Frontend Architecture

## Purpose

This document defines the frontend architecture for the Central Monitoring Panel. It will be expanded as the design system, feature modules, and backend integrations are added.

## Application Layers

- `src/app`: application entry, providers, routing, and runtime configuration.
- `src/shared`: reusable API, auth, UI, layout, feedback, form, table, chart, hook, utility, constant, and type foundations.
- `src/features`: feature-owned business modules for auth, dashboard, gateways, machines, tags, OEE, analytics, alerts, reports, users, roles, and settings.
- `src/pages`: route-level page composition.
- `src/styles`: global Tailwind and shadcn token setup.

## Data Access

- Axios lives behind `shared/api/http-client.ts`.
- TanStack Query uses the shared `queryClient`.
- Query keys are generated through `shared/api/query-keys.ts`.
- Backend endpoint contracts will be added deliberately as feature prompts define them.

## Auth And Authorization

- Auth session storage, provider, hook, and protected route shell live under `src/shared/auth`.
- Roles and permissions are represented in shared types but are not wired to real backend endpoints yet.

## Extension Rules

- New feature code should live under `src/features/<feature-name>`.
- Route-level composition should stay in `src/pages`.
- Shared components must remain generic and design-system aligned.
- Page-specific styling should wait until the UI guidelines are formalized.
