import type { ReactNode } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui"

import {
  MachineStateBadge,
  MachineStatusBadge,
} from "@/features/machines/components/machine-status-badge"
import type { MachineDetail } from "@/features/machines/types/machine.types"

type MachineCurrentStatusCardProps = {
  machine: MachineDetail
}

export function MachineCurrentStatusCard({
  machine,
}: MachineCurrentStatusCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current status</CardTitle>
        <CardDescription>
          Live machine identity, gateway relation and production state.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatusItem label="Machine code" value={machine.code} />
        <StatusItem label="Gateway" value={machine.gateway} />
        <StatusItem label="Status">
          <MachineStatusBadge status={machine.status} />
        </StatusItem>
        <StatusItem label="State">
          <MachineStateBadge state={machine.currentState} />
        </StatusItem>
      </CardContent>
    </Card>
  )
}

type StatusItemProps = {
  label: string
  value?: string
  children?: ReactNode
}

function StatusItem({ label, value, children }: StatusItemProps) {
  return (
    <div className="rounded-md border bg-surface p-3">
      <p className="text-xs font-medium uppercase text-muted-foreground">
        {label}
      </p>
      <div className="mt-2">
        {children ?? <p className="text-sm font-medium text-foreground">{value}</p>}
      </div>
    </div>
  )
}
