export type TagDataType = "boolean" | "integer" | "float" | "string"

export type PlcTag = {
  id: string
  name: string
  code: string
  dataType: TagDataType
  unit: string
  machine: string
  gateway: string
  isActive: boolean
}

export type TagFormValues = {
  name: string
  code: string
  dataType: TagDataType
  unit: string
  machineId: string
  gatewayId: string
  isActive: boolean
}
