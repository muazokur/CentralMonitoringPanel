import { waitForMock } from "@/features/mock-utils"
import { dashboardOverviewMock } from "@/features/dashboard/mocks/dashboard.mock"

export async function getDashboardOverview() {
  await waitForMock()

  return dashboardOverviewMock
}
