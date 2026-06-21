import { simulateNetwork } from "@/features/mock-utils"
import { tagsMock } from "@/features/tags/mocks/tags.mock"
import type { PlcTag, TagFormValues } from "@/features/tags/types/tag.types"

export async function getTags(): Promise<PlcTag[]> {
  return simulateNetwork(tagsMock)
}

export async function createTag(values: TagFormValues): Promise<PlcTag> {
  return simulateNetwork({
    id: `tag-${crypto.randomUUID()}`,
    code: values.code,
    dataType: values.dataType,
    gateway: values.gatewayId,
    isActive: values.isActive,
    machine: values.machineId,
    name: values.name,
    unit: values.unit,
  })
}

export async function updateTag(
  tagId: string,
  values: TagFormValues,
): Promise<PlcTag> {
  return simulateNetwork({
    id: tagId,
    code: values.code,
    dataType: values.dataType,
    gateway: values.gatewayId,
    isActive: values.isActive,
    machine: values.machineId,
    name: values.name,
    unit: values.unit,
  })
}

export async function deleteTag(tagId: string): Promise<{ id: string }> {
  return simulateNetwork({ id: tagId })
}
