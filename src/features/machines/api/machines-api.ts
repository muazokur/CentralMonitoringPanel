import { simulateNetwork } from "@/features/mock-utils"
import { machinesMock } from "@/features/machines/mocks/machines.mock"
import type {
  Machine,
  MachineFormValues,
} from "@/features/machines/types/machine.types"

export async function getMachines(): Promise<Machine[]> {
  return simulateNetwork(machinesMock)
}

export async function getMachineDetail(
  machineId: string,
): Promise<Machine | undefined> {
  return simulateNetwork(machinesMock.find((machine) => machine.id === machineId))
}

export async function createMachine(values: MachineFormValues): Promise<Machine> {
  return simulateNetwork({
    id: `mach-${crypto.randomUUID()}`,
    code: values.code,
    currentState: "idle",
    gateway: values.gatewayId,
    lastUpdate: new Date().toISOString(),
    name: values.name,
    oee: 0,
    status: values.status,
  })
}

export async function updateMachine(
  machineId: string,
  values: MachineFormValues,
): Promise<Machine> {
  return simulateNetwork({
    ...machinesMock[0],
    code: values.code,
    gateway: values.gatewayId,
    id: machineId,
    name: values.name,
    status: values.status,
  })
}

export async function deleteMachine(machineId: string): Promise<{ id: string }> {
  return simulateNetwork({ id: machineId })
}
