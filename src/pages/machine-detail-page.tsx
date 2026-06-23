import { ArrowLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router"

import {
  MachineAlertsTable,
  MachineConnectedTagsTable,
  MachineCurrentStatusCard,
  MachineDetailSummaryCards,
  MachineHistoryTable,
  MachineOeeCards,
  MachineTagValuesTable,
  useMachineDetail,
} from "@/features/machines"
import { EmptyState, ErrorState, LoadingState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageSection,
} from "@/shared/components/page"
import { Button } from "@/shared/components/ui"

export function MachineDetailPage() {
  const navigate = useNavigate()
  const { machineId } = useParams()
  const {
    data: machine,
    error,
    isError,
    isLoading,
  } = useMachineDetail(machineId ?? "")

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Machine detail could not be loaded. Please try again."

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          actions={
            <Button onClick={() => navigate("/app/machines")} variant="outline">
              <ArrowLeft aria-hidden="true" />
              Back to machines
            </Button>
          }
          description="Machine status, connected tags, latest values, OEE and operational history."
          title={machine?.name ?? "Machine Detail"}
        />
        <PageContent>
          {isLoading ? (
            <LoadingState label="Loading machine detail" variant="skeleton" />
          ) : null}

          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Machine detail unavailable"
            />
          ) : null}

          {!isLoading && !isError && !machine ? (
            <EmptyState
              description="The requested machine could not be found."
              title="Machine not found"
            />
          ) : null}

          {machine ? (
            <>
              <MachineDetailSummaryCards machine={machine} />

              <PageSection title="Current status">
                <MachineCurrentStatusCard machine={machine} />
              </PageSection>

              <PageSection title="OEE cards">
                <MachineOeeCards oee={machine.oeeSummary} />
              </PageSection>

              <PageSection
                description="PLC tags currently associated with this machine."
                title="Connected tags"
              >
                <MachineConnectedTagsTable data={machine.connectedTags} />
              </PageSection>

              <PageSection
                description="Most recent values captured from connected machine tags."
                title="Latest tag values"
              >
                <MachineTagValuesTable data={machine.latestTagValues} />
              </PageSection>

              <PageSection title="Alerts">
                <MachineAlertsTable data={machine.alerts} />
              </PageSection>

              <PageSection title="History table">
                <MachineHistoryTable data={machine.history} />
              </PageSection>
            </>
          ) : null}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
