import { RolesManagementPanel } from "@/features/roles"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"

export function RolesPage() {
  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Review access roles, assigned users and permission coverage."
          title="Roles"
        />
        <PageContent>
          <RolesManagementPanel />
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
