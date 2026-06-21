import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import type { OeeTrendPoint } from "@/features/dashboard/types/dashboard.types"
import { ChartCard } from "@/shared/components/charts"

type DashboardOeeTrendChartProps = {
  data: OeeTrendPoint[]
}

export function DashboardOeeTrendChart({ data }: DashboardOeeTrendChartProps) {
  return (
    <ChartCard description="OEE trend across the current shift." title="OEE Trend">
      <ResponsiveContainer height={260} width="100%">
        <LineChart data={data}>
          <XAxis dataKey="timestamp" tickLine={false} />
          <YAxis domain={[0, 100]} tickLine={false} />
          <Tooltip />
          <Line dataKey="oee" dot={false} stroke="var(--chart-1)" strokeWidth={2} />
          <Line
            dataKey="availability"
            dot={false}
            stroke="var(--chart-2)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
