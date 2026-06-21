import { createBrowserRouter, RouterProvider } from "react-router"

import { FoundationPage } from "@/pages/foundation-page"
import { ROUTE_PATHS } from "@/shared/constants"

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.home,
    element: <FoundationPage />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
