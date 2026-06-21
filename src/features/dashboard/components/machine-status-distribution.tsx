import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import type { MachineStatusDistribution } from "@/features/dashboard/types/dashboard.types"
import { ChartCard } from "@/shared/components/charts"

type MachineStatusDistributionProps = {
  data: MachineStatusDistribution[]
}

export function MachineStatusDistributionChart({
  data,
}: MachineStatusDistributionProps) {
  return (
    <ChartCard description="Current machine state distribution." title="Machine Status">
      <ResponsiveContainer height={240} width="100%">
        <BarChart data={data}>
          <XAxis dataKey="status" tickLine={false} />
          <YAxis allowDecimals={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="count" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
