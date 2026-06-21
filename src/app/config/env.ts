export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL?.trim() ?? "",
  appName: "Central Monitoring Panel",
} as const
