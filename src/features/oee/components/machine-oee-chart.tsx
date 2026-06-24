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

import type { MachineOee } from "@/features/oee/types/oee.types"

type MachineOeeChartProps = {
  data: MachineOee[]
}

export function MachineOeeChart({ data }: MachineOeeChartProps) {
  return (
    <ChartCard
      description="Machine-level OEE contribution for the selected date range."
      title="Machine-based OEE"
    >
      <ResponsiveContainer height={280} width="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="machine" tickLine={false} />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
          <Bar dataKey="oee" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
