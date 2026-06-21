import { simulateNetwork } from "@/features/mock-utils"
import { settingsMock } from "@/features/settings/mocks/settings.mock"
import type {
  SettingsFormValues,
  SettingsProfile,
} from "@/features/settings/types/settings.types"

export async function getSettings(): Promise<SettingsProfile> {
  return simulateNetwork(settingsMock)
}

export async function updateSettings(
  values: SettingsFormValues,
): Promise<SettingsProfile> {
  return simulateNetwork(values)
}
