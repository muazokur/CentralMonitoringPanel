import { UsersManagementPanel } from "@/features/users"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"

export function UsersPage() {
  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Manage platform users, role assignments and account status."
          title="Users"
        />
        <PageContent>
          <UsersManagementPanel />
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
