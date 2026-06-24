import { ArrowLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router"

import {
  TagLatestValueCard,
  TagQualityCard,
  TagRecentHistoryTable,
  TagRelationCard,
  TagSummaryCards,
  useTagDetail,
} from "@/features/tags"
import { EmptyState, ErrorState, LoadingState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageSection,
} from "@/shared/components/page"
import { Button } from "@/shared/components/ui"

export function TagDetailPage() {
  const navigate = useNavigate()
  const { tagId } = useParams()
  const { data: tag, error, isError, isLoading } = useTagDetail(tagId ?? "")

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Tag detail could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          actions={
            <Button onClick={() => navigate("/app/tags")} variant="outline">
              <ArrowLeft aria-hidden="true" />
              Back to tags
            </Button>
          }
          description="PLC tag relation, latest value, quality and recent history."
          title={tag?.name ?? "Tag Detail"}
        />
        <PageContent>
          {isLoading ? (
            <LoadingState label="Loading tag detail" variant="skeleton" />
          ) : null}

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Tag detail unavailable"
            />
          ) : null}

          {!isLoading && !isError && !tag ? (
            <EmptyState
              description="The requested PLC tag could not be found."
              title="Tag not found"
            />
          ) : null}

          {tag ? (
            <>
              <TagSummaryCards tag={tag} />

              <PageSection title="Tag summary">
                <TagRelationCard tag={tag} />
              </PageSection>

              <PageSection title="Latest value and quality">
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
                  <TagLatestValueCard tag={tag} />
                  <TagQualityCard tag={tag} />
                </div>
              </PageSection>

              <PageSection
                description="Recent captured values and signal quality for this PLC tag."
                title="Recent value history"
              >
                <TagRecentHistoryTable data={tag.recentHistory} />
              </PageSection>
            </>
          ) : null}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
