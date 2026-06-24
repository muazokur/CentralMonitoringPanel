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

import type { MachineComparisonItem } from "@/features/analytics/types/analytics.types"

type MachineComparisonChartProps = {
  data: MachineComparisonItem[]
}

export function MachineComparisonChart({ data }: MachineComparisonChartProps) {
  return (
    <ChartCard
      description="Efficiency comparison across monitored machines."
      title="Machine comparison"
    >
      <ResponsiveContainer height={280} width="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="machine" tickLine={false} />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
          <Bar
            dataKey="efficiency"
            fill="var(--chart-4)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
