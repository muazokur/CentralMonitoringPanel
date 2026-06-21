import type { Report } from "@/features/reports/types/report.types"

export const reportsMock: Report[] = [
  {
    id: "report-oee-daily",
    name: "Daily OEE Report",
    type: "oee",
    period: "2026-06-21",
    status: "ready",
    generatedAt: "2026-06-21T09:30:00.000Z",
  },
  {
    id: "report-production-shift-a",
    name: "Shift A Production Report",
    type: "production",
    period: "Shift A",
    status: "ready",
    generatedAt: "2026-06-21T08:02:00.000Z",
  },
  {
    id: "report-downtime-weekly",
    name: "Weekly Downtime Report",
    type: "downtime",
    period: "2026-W25",
    status: "pending",
    generatedAt: "2026-06-21T09:45:00.000Z",
  },
  {
    id: "report-efficiency-monthly",
    name: "Monthly Efficiency Report",
    type: "efficiency",
    period: "2026-06",
    status: "ready",
    generatedAt: "2026-06-20T23:30:00.000Z",
  },
]
