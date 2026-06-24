import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { ChartCard } from "@/shared/components/charts"

import type { ShiftOee } from "@/features/oee/types/oee.types"

type ShiftComparisonChartProps = {
  data: ShiftOee[]
}

export function ShiftComparisonChart({ data }: ShiftComparisonChartProps) {
  return (
    <ChartCard
      description="Actual OEE compared with shift target."
      title="Shift comparison"
    >
      <ResponsiveContainer height={280} width="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="shift" tickLine={false} />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
          <Legend />
          <Bar dataKey="oee" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" fill="var(--chart-4)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
