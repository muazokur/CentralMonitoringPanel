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

import type { OeePoint } from "@/features/oee/types/oee.types"

type OeeTrendChartProps = {
  data: OeePoint[]
}

export function OeeTrendChart({ data }: OeeTrendChartProps) {
  return (
    <ChartCard
      description="Availability, performance, quality and OEE trend."
      title="OEE trend"
    >
      <ResponsiveContainer height={260} width="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="label" tickLine={false} />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
          <Line dataKey="availability" dot={false} stroke="var(--chart-1)" />
          <Line dataKey="performance" dot={false} stroke="var(--chart-2)" />
          <Line dataKey="quality" dot={false} stroke="var(--chart-3)" />
          <Line dataKey="oee" stroke="var(--chart-4)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
