import { EmptyState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"

type RoutePlaceholderPageProps = {
  title: string
  description: string
}

export function RoutePlaceholderPage({
  title,
  description,
}: RoutePlaceholderPageProps) {
  return (
    <AppLayout>
      <PageContainer>
        <PageHeader description={description} title={title} />
        <PageContent>
          <EmptyState
            description="This route is wired into the application shell. Business UI will be implemented in later prompts."
            title={`${title} page ready`}
          />
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
