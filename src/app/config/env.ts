function readOptionalEnv(name: keyof ImportMetaEnv) {
  const value = import.meta.env[name]

  return typeof value === "string" ? value.trim() : ""
}

function readNumberEnv(name: keyof ImportMetaEnv, fallback: number) {
  const value = Number(readOptionalEnv(name))

  return Number.isFinite(value) && value > 0 ? value : fallback
}

export const env = {
  apiBaseUrl: readOptionalEnv("VITE_API_BASE_URL"),
  appName: readOptionalEnv("VITE_APP_NAME") || "Central Monitoring Panel",
  apiTimeoutMs: readNumberEnv("VITE_API_TIMEOUT_MS", 30_000),
} as const
