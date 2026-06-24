import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { ChartCard } from "@/shared/components/charts"

import type { AnalyticsTrendPoint } from "@/features/analytics/types/analytics.types"

type EfficiencyTrendChartProps = {
  data: AnalyticsTrendPoint[]
}

export function EfficiencyTrendChart({ data }: EfficiencyTrendChartProps) {
  return (
    <ChartCard
      description="Production efficiency across the active operating day."
      title="Efficiency trends"
    >
      <ResponsiveContainer height={280} width="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="label" tickLine={false} />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
          <Line
            dataKey="efficiency"
            dot={false}
            stroke="var(--chart-1)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
