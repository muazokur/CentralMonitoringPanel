import { Filter, RotateCcw } from "lucide-react"
import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"

import { FormSelect } from "@/shared/components/form"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui"
import type { SelectOption } from "@/shared/types"

import type {
  AlertFilterOptions,
  AlertFilters,
} from "@/features/alerts/types/alert.types"

const ALL_FILTER_VALUE = "__all__"

const severityOptions: SelectOption[] = [
  { label: "All severities", value: ALL_FILTER_VALUE },
  { label: "Warning", value: "warning" },
  { label: "Critical", value: "critical" },
]

const statusOptions: SelectOption[] = [
  { label: "All statuses", value: ALL_FILTER_VALUE },
  { label: "Active", value: "active" },
  { label: "Pending", value: "pending" },
  { label: "Resolved", value: "resolved" },
]

type AlertFilterFormValues = {
  severity: string
  status: string
  machine: string
}

type AlertsFilterPanelProps = {
  filters: AlertFilters
  filterOptions: AlertFilterOptions
  disabled?: boolean
  onFiltersChange: (filters: AlertFilters) => void
}

function toFormValues(filters: AlertFilters): AlertFilterFormValues {
  return {
    machine: filters.machine ?? ALL_FILTER_VALUE,
    severity: filters.severity ?? ALL_FILTER_VALUE,
    status: filters.status ?? ALL_FILTER_VALUE,
  }
}

function toFilters(values: AlertFilterFormValues): AlertFilters {
  return {
    machine:
      values.machine === ALL_FILTER_VALUE ? undefined : values.machine,
    severity:
      values.severity === ALL_FILTER_VALUE
        ? undefined
        : (values.severity as AlertFilters["severity"]),
    status:
      values.status === ALL_FILTER_VALUE
        ? undefined
        : (values.status as AlertFilters["status"]),
  }
}

function withAllMachines(options: SelectOption[]): SelectOption[] {
  return [{ label: "All machines", value: ALL_FILTER_VALUE }, ...options]
}

export function AlertsFilterPanel({
  filters,
  filterOptions,
  disabled,
  onFiltersChange,
}: AlertsFilterPanelProps) {
  const { control, handleSubmit, reset } = useForm<AlertFilterFormValues>({
    defaultValues: toFormValues(filters),
  })

  const machineOptions = useMemo(
    () => withAllMachines(filterOptions.machines),
    [filterOptions.machines],
  )

  useEffect(() => {
    reset(toFormValues(filters))
  }, [filters, reset])

  function clearFilters() {
    const nextFilters: AlertFilters = {}
    reset(toFormValues(nextFilters))
    onFiltersChange(nextFilters)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
        <CardDescription>
          Narrow alerts by severity, lifecycle status and machine.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto]"
          onSubmit={handleSubmit((values) => onFiltersChange(toFilters(values)))}
        >
          <FormSelect
            control={control}
            disabled={disabled}
            label="Severity"
            name="severity"
            options={severityOptions}
          />
          <FormSelect
            control={control}
            disabled={disabled}
            label="Status"
            name="status"
            options={statusOptions}
          />
          <FormSelect
            control={control}
            disabled={disabled}
            label="Machine"
            name="machine"
            options={machineOptions}
          />
          <div className="flex flex-col-reverse gap-2 sm:flex-row lg:items-end">
            <Button
              disabled={disabled}
              onClick={clearFilters}
              type="button"
              variant="outline"
            >
              <RotateCcw aria-hidden="true" />
              Reset
            </Button>
            <Button disabled={disabled} type="submit">
              <Filter aria-hidden="true" />
              Apply
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
