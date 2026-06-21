import { Activity, Boxes, Gauge } from "lucide-react"

import { env } from "@/app/config/env"
import { ChartCard, MetricCard } from "@/shared/components/charts"
import { EmptyState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageSection,
} from "@/shared/components/page"
import { Button, StatusBadge } from "@/shared/components/ui"

export function FoundationPage() {
  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          actions={
            <>
              <StatusBadge tone="success">Ready</StatusBadge>
              <Button variant="outline">Guidelines</Button>
            </>
          }
          description="Industrial operations workspace."
          eyebrow={env.appName}
          title="Central Monitoring Panel"
        />
        <PageContent>
          <PageSection title="Workspace">
            <div className="grid gap-4 md:grid-cols-3">
              <MetricCard
                icon={Boxes}
                title="Interface"
                tone="info"
                trend="Stable"
                value="Ready"
              />
              <MetricCard
                icon={Activity}
                title="Navigation"
                tone="success"
                trend="Online"
                value="Ready"
              />
              <MetricCard
                icon={Gauge}
                title="Telemetry"
                tone="neutral"
                trend="Awaiting data"
                value="Shell"
              />
            </div>
          </PageSection>

          <ChartCard
            description="Awaiting backend data."
            title="Telemetry Surface"
          >
            <EmptyState
              description="Monitoring data will appear here after feature modules are connected."
              title="No telemetry selected"
            />
          </ChartCard>
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
