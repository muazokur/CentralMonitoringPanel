function readOptionalEnv(name: keyof ImportMetaEnv) {
  const value = import.meta.env[name]

  return typeof value === "string" ? value.trim() : ""
}

export const env = {
  apiBaseUrl: readOptionalEnv("VITE_API_BASE_URL"),
  appName: readOptionalEnv("VITE_APP_NAME") || "Central Monitoring Panel",
} as const
