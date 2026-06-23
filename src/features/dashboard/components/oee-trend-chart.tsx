import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import type { OeeTrendPoint } from "@/features/dashboard/types/dashboard.types"
import { ChartCard } from "@/shared/components/charts"

type OeeTrendChartProps = {
  data: OeeTrendPoint[]
  className?: string
}

export function OeeTrendChart({ data, className }: OeeTrendChartProps) {
  return (
    <ChartCard
      className={className}
      description="OEE, availability, performance and quality across the current shift."
      title="OEE trend"
    >
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={data} margin={{ left: -16, right: 8, top: 8 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="timestamp" tickLine={false} />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
          />
          <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
          <Line dataKey="oee" dot={false} stroke="var(--chart-1)" strokeWidth={2.5} />
          <Line
            dataKey="availability"
            dot={false}
            stroke="var(--chart-2)"
            strokeWidth={2}
          />
          <Line
            dataKey="performance"
            dot={false}
            stroke="var(--chart-3)"
            strokeWidth={2}
          />
          <Line
            dataKey="quality"
            dot={false}
            stroke="var(--chart-4)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
