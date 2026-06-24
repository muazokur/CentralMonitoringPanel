import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { ChartCard } from "@/shared/components/charts"

import type { DowntimeSummaryItem } from "@/features/analytics/types/analytics.types"

type DowntimeSummaryChartProps = {
  data: DowntimeSummaryItem[]
}

export function DowntimeSummaryChart({ data }: DowntimeSummaryChartProps) {
  return (
    <ChartCard
      description="Downtime minutes grouped by operational reason."
      title="Downtime summary"
    >
      <ResponsiveContainer height={280} width="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="reason" tickLine={false} />
          <YAxis tickFormatter={(value) => `${value}m`} />
          <Tooltip formatter={(value) => `${Number(value)} min`} />
          <Bar dataKey="minutes" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
