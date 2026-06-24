import type { ReactElement } from "react"
import { Navigate, createBrowserRouter } from "react-router"

import { NotFoundRoute } from "@/app/router/not-found-route"
import { ProtectedRoute } from "@/app/router/protected-route"
import { PublicRoute } from "@/app/router/public-route"
import { ROUTE_PATHS } from "@/app/router/route-paths"
import { AlertsPage } from "@/pages/alerts-page"
import { AnalyticsPage } from "@/pages/analytics-page"
import { DashboardPage } from "@/pages/dashboard-page"
import { EdgeGatewayDetailPage } from "@/pages/edge-gateway-detail-page"
import { EdgeGatewaysPage } from "@/pages/edge-gateways-page"
import { ForbiddenPage } from "@/pages/forbidden-page"
import { LoginPage } from "@/pages/login-page"
import { MachineDetailPage } from "@/pages/machine-detail-page"
import { MachinesPage } from "@/pages/machines-page"
import { NotFoundPage } from "@/pages/not-found-page"
import { OeeDashboardPage } from "@/pages/oee-dashboard-page"
import { ReportsPage } from "@/pages/reports-page"
import { RolesPage } from "@/pages/roles-page"
import { ServerErrorPage } from "@/pages/server-error-page"
import { SettingsPage } from "@/pages/settings-page"
import { TagDetailPage } from "@/pages/tag-detail-page"
import { TagValueHistoryPage } from "@/pages/tag-value-history-page"
import { TagsPage } from "@/pages/tags-page"
import { UsersPage } from "@/pages/users-page"
import { PERMISSIONS, type Permission } from "@/shared/constants"

function withPermission(element: ReactElement, permissions: Permission[]) {
  return (
    <ProtectedRoute requiredPermissions={permissions}>{element}</ProtectedRoute>
  )
}

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.home,
    element: <Navigate replace to={ROUTE_PATHS.dashboard} />,
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: ROUTE_PATHS.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTE_PATHS.app,
        element: <Navigate replace to={ROUTE_PATHS.dashboard} />,
      },
      {
        path: ROUTE_PATHS.dashboard,
        element: withPermission(<DashboardPage />, [
          PERMISSIONS.dashboardView,
        ]),
      },
      {
        path: ROUTE_PATHS.edgeGateways,
        element: withPermission(<EdgeGatewaysPage />, [
          PERMISSIONS.edgeGatewaysView,
        ]),
      },
      {
        path: ROUTE_PATHS.edgeGatewayDetail,
        element: withPermission(<EdgeGatewayDetailPage />, [
          PERMISSIONS.edgeGatewaysView,
        ]),
      },
      {
        path: ROUTE_PATHS.machines,
        element: withPermission(<MachinesPage />, [PERMISSIONS.machinesView]),
      },
      {
        path: ROUTE_PATHS.machineDetail,
        element: withPermission(<MachineDetailPage />, [
          PERMISSIONS.machinesView,
        ]),
      },
      {
        path: ROUTE_PATHS.tags,
        element: withPermission(<TagsPage />, [PERMISSIONS.tagsView]),
      },
      {
        path: ROUTE_PATHS.tagDetail,
        element: withPermission(<TagDetailPage />, [PERMISSIONS.tagsView]),
      },
      {
        path: ROUTE_PATHS.tagValueHistory,
        element: withPermission(<TagValueHistoryPage />, [
          PERMISSIONS.tagsView,
        ]),
      },
      {
        path: ROUTE_PATHS.oee,
        element: withPermission(<OeeDashboardPage />, [PERMISSIONS.oeeView]),
      },
      {
        path: ROUTE_PATHS.analytics,
        element: withPermission(<AnalyticsPage />, [
          PERMISSIONS.analyticsView,
        ]),
      },
      {
        path: ROUTE_PATHS.alerts,
        element: withPermission(<AlertsPage />, [PERMISSIONS.alertsView]),
      },
      {
        path: ROUTE_PATHS.reports,
        element: withPermission(<ReportsPage />, [PERMISSIONS.reportsView]),
      },
      {
        path: ROUTE_PATHS.users,
        element: withPermission(<UsersPage />, [PERMISSIONS.usersView]),
      },
      {
        path: ROUTE_PATHS.roles,
        element: withPermission(<RolesPage />, [PERMISSIONS.rolesView]),
      },
      {
        path: ROUTE_PATHS.settings,
        element: withPermission(<SettingsPage />, [
          PERMISSIONS.settingsView,
        ]),
      },
    ],
  },
  {
    path: ROUTE_PATHS.forbidden,
    element: <ForbiddenPage />,
  },
  {
    path: ROUTE_PATHS.notFound,
    element: <NotFoundPage />,
  },
  {
    path: ROUTE_PATHS.serverError,
    element: <ServerErrorPage />,
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
])
