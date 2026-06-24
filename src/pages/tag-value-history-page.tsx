import { useState } from "react"

import {
  TagValueHistoryFilterPanel,
  TagValueHistoryTable,
  useTagValueHistory,
  useTagValueHistoryFilterOptions,
  type TagValueHistoryFilterOptions,
  type TagValueHistoryFilters,
  type TagValueHistoryItem,
} from "@/features/tag-value-history"
import { ErrorState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"

const EMPTY_HISTORY: TagValueHistoryItem[] = []
const EMPTY_FILTER_OPTIONS: TagValueHistoryFilterOptions = {
  machines: [],
  tags: [],
}

export function TagValueHistoryPage() {
  const [filters, setFilters] = useState<TagValueHistoryFilters>({})
  const { data, error, isError, isLoading } = useTagValueHistory(filters)
  const { data: filterOptions, isLoading: isLoadingFilterOptions } =
    useTagValueHistoryFilterOptions()
  const history = data ?? EMPTY_HISTORY

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Historical tag values could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Search historical PLC tag values by date range, machine and tag."
          title="Tag Value History"
        />
        <PageContent>
          <TagValueHistoryFilterPanel
            disabled={isLoadingFilterOptions}
            filterOptions={filterOptions ?? EMPTY_FILTER_OPTIONS}
            filters={filters}
            onFiltersChange={setFilters}
          />

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Tag history unavailable"
            />
          ) : (
            <TagValueHistoryTable data={history} isLoading={isLoading} />
          )}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
