import { env } from "@/app/config/env"
import { ROUTE_PATHS } from "@/app/router/route-paths"

export const appConfig = {
  name: env.appName,
  description: "Industrial IoT monitoring and operations platform",
  defaultProtectedPath: ROUTE_PATHS.dashboard,
  defaultPublicPath: ROUTE_PATHS.login,
} as const
