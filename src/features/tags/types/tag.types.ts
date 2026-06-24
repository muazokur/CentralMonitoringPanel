export type TagDataType = "boolean" | "integer" | "float" | "string"
export type TagValueQuality = "good" | "uncertain" | "bad"

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

export type TagLatestValue = {
  id: string
  value: string
  quality: TagValueQuality
  timestamp: string
}

export type TagRecentHistoryItem = {
  id: string
  value: string
  quality: TagValueQuality
  timestamp: string
}

export type TagQualitySummary = {
  goodCount: number
  uncertainCount: number
  badCount: number
  latestQuality: TagValueQuality
  lastCheckedAt: string
}

export type TagDetail = PlcTag & {
  latestValue: TagLatestValue
  recentHistory: TagRecentHistoryItem[]
  qualitySummary: TagQualitySummary
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
