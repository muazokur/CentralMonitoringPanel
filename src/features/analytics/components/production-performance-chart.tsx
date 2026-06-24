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

import type { ProductionPerformancePoint } from "@/features/analytics/types/analytics.types"

type ProductionPerformanceChartProps = {
  data: ProductionPerformancePoint[]
}

export function ProductionPerformanceChart({
  data,
}: ProductionPerformanceChartProps) {
  return (
    <ChartCard
      description="Actual output measured against planned production."
      title="Production performance"
    >
      <ResponsiveContainer height={280} width="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="label" tickLine={false} />
          <YAxis />
          <Tooltip formatter={(value) => Number(value).toLocaleString()} />
          <Legend />
          <Bar dataKey="planned" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="actual" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
