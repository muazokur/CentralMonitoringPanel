import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import type { MachineStatusDistribution } from "@/features/dashboard/types/dashboard.types"
import { ChartCard } from "@/shared/components/charts"

const statusColorMap: Record<MachineStatusDistribution["status"], string> = {
  idle: "var(--chart-3)",
  maintenance: "var(--chart-4)",
  offline: "var(--chart-5)",
  running: "var(--chart-2)",
}

type MachineStatusChartProps = {
  data: MachineStatusDistribution[]
  className?: string
}

export function MachineStatusChart({ data, className }: MachineStatusChartProps) {
  return (
    <ChartCard
      className={className}
      description="Current state distribution across connected machines."
      title="Machine status"
    >
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={data} margin={{ left: -16, right: 8, top: 8 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="status" tickLine={false} />
          <YAxis allowDecimals={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {data.map((item) => (
              <Cell fill={statusColorMap[item.status]} key={item.status} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
