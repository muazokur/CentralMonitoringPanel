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
import { TagValueHistoryPage } from "@/pages/tag-value-history-page"
import { TagsPage } from "@/pages/tags-page"
import { UsersPage } from "@/pages/users-page"

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
        element: <DashboardPage />,
      },
      {
        path: ROUTE_PATHS.edgeGateways,
        element: <EdgeGatewaysPage />,
      },
      {
        path: ROUTE_PATHS.edgeGatewayDetail,
        element: <EdgeGatewayDetailPage />,
      },
      {
        path: ROUTE_PATHS.machines,
        element: <MachinesPage />,
      },
      {
        path: ROUTE_PATHS.machineDetail,
        element: <MachineDetailPage />,
      },
      {
        path: ROUTE_PATHS.tags,
        element: <TagsPage />,
      },
      {
        path: ROUTE_PATHS.tagValueHistory,
        element: <TagValueHistoryPage />,
      },
      {
        path: ROUTE_PATHS.oee,
        element: <OeeDashboardPage />,
      },
      {
        path: ROUTE_PATHS.analytics,
        element: <AnalyticsPage />,
      },
      {
        path: ROUTE_PATHS.alerts,
        element: <AlertsPage />,
      },
      {
        path: ROUTE_PATHS.reports,
        element: <ReportsPage />,
      },
      {
        path: ROUTE_PATHS.users,
        element: <UsersPage />,
      },
      {
        path: ROUTE_PATHS.roles,
        element: <RolesPage />,
      },
      {
        path: ROUTE_PATHS.settings,
        element: <SettingsPage />,
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
