import { Navigate } from "react-router"

import { ROUTE_PATHS } from "@/app/router/route-paths"

export function NotFoundRoute() {
  return <Navigate replace to={ROUTE_PATHS.notFound} />
}
