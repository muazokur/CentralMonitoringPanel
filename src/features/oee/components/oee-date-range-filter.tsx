import { Filter, RotateCcw } from "lucide-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

import { FormDatePicker } from "@/shared/components/form"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui"

import type { OeeDateRangeFilter } from "@/features/oee/types/oee.types"

type OeeDateRangeFormValues = {
  fromDate: string
  toDate: string
}

type OeeDateRangeFilterPanelProps = {
  filter: OeeDateRangeFilter
  disabled?: boolean
  onFilterChange: (filter: OeeDateRangeFilter) => void
}

function toFormValues(filter: OeeDateRangeFilter): OeeDateRangeFormValues {
  return {
    fromDate: filter.fromDate ?? "",
    toDate: filter.toDate ?? "",
  }
}

function toFilter(values: OeeDateRangeFormValues): OeeDateRangeFilter {
  return {
    fromDate: values.fromDate || undefined,
    toDate: values.toDate || undefined,
  }
}

export function OeeDateRangeFilterPanel({
  filter,
  disabled,
  onFilterChange,
}: OeeDateRangeFilterPanelProps) {
  const { control, handleSubmit, reset } = useForm<OeeDateRangeFormValues>({
    defaultValues: toFormValues(filter),
  })

  useEffect(() => {
    reset(toFormValues(filter))
  }, [filter, reset])

  function clearFilter() {
    const nextFilter: OeeDateRangeFilter = {}
    reset(toFormValues(nextFilter))
    onFilterChange(nextFilter)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Date range</CardTitle>
        <CardDescription>
          Filter OEE calculations by the active reporting window.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4 md:grid-cols-[repeat(2,minmax(0,1fr))_auto]"
          onSubmit={handleSubmit((values) => onFilterChange(toFilter(values)))}
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
          <div className="flex flex-col-reverse gap-2 sm:flex-row md:items-end">
            <Button
              disabled={disabled}
              onClick={clearFilter}
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
