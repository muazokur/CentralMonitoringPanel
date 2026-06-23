import { useCallback } from "react"
import { Navigate, useLocation, useNavigate } from "react-router"

import { MachinesTable, type Machine, useMachines } from "@/features/machines"
import { ErrorState } from "@/shared/components/feedback"
import { AppLayout } from "@/shared/components/layout"
import {
  PageContainer,
  PageContent,
  PageHeader,
} from "@/shared/components/page"

const EMPTY_MACHINES: Machine[] = []

export function MachinesPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { data, error, isError, isLoading } = useMachines()
  const machines = data ?? EMPTY_MACHINES

  const openMachine = useCallback((machineId: string) => {
    navigate(`/app/machines/${machineId}`)
  }, [navigate])

  const errorDescription =
    error instanceof Error
      ? error.message
      : "Machines could not be loaded. Please try again."

  if (location.pathname.endsWith("/")) {
    return <Navigate replace to="/app/machines" />
  }

  return (
    <AppLayout>
      <PageContainer>
        <PageHeader
          description="Review machine availability, current state, gateway relation and OEE performance."
          title="Machines"
        />
        <PageContent>
          {isError ? (
            <ErrorState
              description={errorDescription}
              title="Machine list unavailable"
            />
          ) : (
            <MachinesTable
              data={machines}
              isLoading={isLoading}
              onRowClick={(machine) => openMachine(machine.id)}
              onViewDetail={openMachine}
            />
          )}
        </PageContent>
      </PageContainer>
    </AppLayout>
  )
}
