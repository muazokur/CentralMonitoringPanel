import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StatusBadge,
} from "@/shared/components/ui"

import type { DateRangeComparison } from "@/features/oee/types/oee.types"

type OeeComparisonCardProps = {
  comparison: DateRangeComparison
}

export function OeeComparisonCard({ comparison }: OeeComparisonCardProps) {
  const isPositive = comparison.delta >= 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Date range comparison</CardTitle>
        <CardDescription>
          Current OEE performance compared with the previous period.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border bg-muted/30 p-3">
          <p className="text-sm font-medium text-muted-foreground">Current</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            {comparison.currentOee.toFixed(1)}%
          </p>
        </div>
        <div className="rounded-md border bg-muted/30 p-3">
          <p className="text-sm font-medium text-muted-foreground">Previous</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            {comparison.previousOee.toFixed(1)}%
          </p>
        </div>
        <div className="rounded-md border bg-muted/30 p-3">
          <p className="text-sm font-medium text-muted-foreground">Delta</p>
          <div className="mt-2">
            <StatusBadge tone={isPositive ? "success" : "danger"}>
              {isPositive ? "+" : ""}
              {comparison.delta.toFixed(1)}%
            </StatusBadge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
