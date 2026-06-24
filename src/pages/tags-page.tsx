import { useCallback } from "react"
import { Navigate, useLocation, useNavigate } from "react-router"

import { TagsTable, type PlcTag, useTags } from "@/features/tags"
import { ErrorState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"

const EMPTY_TAGS: PlcTag[] = []

export function TagsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { data, error, isError, isLoading } = useTags()
  const tags = data ?? EMPTY_TAGS

  const openTag = useCallback((tagId: string) => {
    navigate(`/app/tags/${tagId}`)
  }, [navigate])

  const errorDescription =
    error instanceof Error
      ? error.message
      : "PLC tags could not be loaded. Please try again."

  if (location.pathname.endsWith("/")) {
    return <Navigate replace to="/app/tags" />
  }

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Review PLC tag definitions, machine relations, gateway source and active status."
          title="Tags"
        />
        <PageContent>
          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Tag list unavailable"
            />
          ) : (
            <TagsTable
              data={tags}
              isLoading={isLoading}
              onRowClick={(tag) => openTag(tag.id)}
              onViewDetail={openTag}
            />
          )}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
