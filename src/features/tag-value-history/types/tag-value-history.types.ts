export type TagValueQuality = "good" | "uncertain" | "bad"

export type TagValueHistoryItem = {
  id: string
  tag: string
  machine: string
  gateway: string
  value: string
  quality: TagValueQuality
  timestamp: string
}
