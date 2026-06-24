import { Filter, RotateCcw } from "lucide-react"
import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"

import { FormDatePicker, FormSelect } from "@/shared/components/form"
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
  TagValueHistoryFilterOptions,
  TagValueHistoryFilters,
} from "@/features/tag-value-history/types/tag-value-history.types"

const ALL_FILTER_VALUE = "__all__"

type TagValueHistoryFilterFormValues = {
  fromDate: string
  toDate: string
  machine: string
  tag: string
}

type TagValueHistoryFilterPanelProps = {
  filters: TagValueHistoryFilters
  filterOptions: TagValueHistoryFilterOptions
  disabled?: boolean
  onFiltersChange: (filters: TagValueHistoryFilters) => void
}

function toFormValues(
  filters: TagValueHistoryFilters,
): TagValueHistoryFilterFormValues {
  return {
    fromDate: filters.fromDate ?? "",
    machine: filters.machine ?? ALL_FILTER_VALUE,
    tag: filters.tag ?? ALL_FILTER_VALUE,
    toDate: filters.toDate ?? "",
  }
}

function toFilters(
  values: TagValueHistoryFilterFormValues,
): TagValueHistoryFilters {
  return {
    fromDate: values.fromDate || undefined,
    machine:
      values.machine === ALL_FILTER_VALUE ? undefined : values.machine,
    tag: values.tag === ALL_FILTER_VALUE ? undefined : values.tag,
    toDate: values.toDate || undefined,
  }
}

function withAllOption(label: string, options: SelectOption[]): SelectOption[] {
  return [{ label, value: ALL_FILTER_VALUE }, ...options]
}

export function TagValueHistoryFilterPanel({
  filters,
  filterOptions,
  disabled,
  onFiltersChange,
}: TagValueHistoryFilterPanelProps) {
  const { control, handleSubmit, reset } =
    useForm<TagValueHistoryFilterFormValues>({
      defaultValues: toFormValues(filters),
    })

  const machineOptions = useMemo(
    () => withAllOption("All machines", filterOptions.machines),
    [filterOptions.machines],
  )
  const tagOptions = useMemo(
    () => withAllOption("All tags", filterOptions.tags),
    [filterOptions.tags],
  )

  useEffect(() => {
    reset(toFormValues(filters))
  }, [filters, reset])

  function clearFilters() {
    const nextFilters: TagValueHistoryFilters = {}
    reset(toFormValues(nextFilters))
    onFiltersChange(nextFilters)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
        <CardDescription>
          Narrow historical values by time range, machine and PLC tag.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]"
          onSubmit={handleSubmit((values) => onFiltersChange(toFilters(values)))}
        >
          <FormDatePicker
            control={control}
            disabled={disabled}
            label="From date"
            name="fromDate"
          />
          <FormDatePicker
            control={control}
            disabled={disabled}
            label="To date"
            name="toDate"
          />
          <FormSelect
            control={control}
            disabled={disabled}
            label="Machine"
            name="machine"
            options={machineOptions}
          />
          <FormSelect
            control={control}
            disabled={disabled}
            label="Tag"
            name="tag"
            options={tagOptions}
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
