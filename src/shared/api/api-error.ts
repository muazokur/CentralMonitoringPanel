import axios from "axios"

import { isRecord } from "@/shared/lib/guards"
import type { ApiError } from "@/shared/types"

function readStringField(source: Record<string, unknown>, field: string) {
  const value = source[field]

  return typeof value === "string" ? value : undefined
}

export function normalizeApiError(error: unknown): ApiError {
  if (isRecord(error) && typeof error.message === "string") {
    return {
      message: error.message,
      status: typeof error.status === "number" ? error.status : undefined,
      code: typeof error.code === "string" ? error.code : undefined,
      correlationId:
        typeof error.correlationId === "string"
          ? error.correlationId
          : undefined,
      details: error.details,
      isNetworkError:
        typeof error.isNetworkError === "boolean"
          ? error.isNetworkError
          : undefined,
    }
  }

  if (axios.isAxiosError(error)) {
    const responseData: unknown = error.response?.data
    const responseRecord = isRecord(responseData) ? responseData : undefined

    return {
      message:
        (responseRecord &&
          (readStringField(responseRecord, "message") ??
            readStringField(responseRecord, "title"))) ||
        error.message ||
        "Unexpected API error",
      status: error.response?.status,
      code: responseRecord
        ? readStringField(responseRecord, "code")
        : error.code,
      correlationId: responseRecord
        ? readStringField(responseRecord, "correlationId")
        : undefined,
      details: responseData,
      isNetworkError: !error.response,
    }
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    }
  }

  return {
    message: "Unexpected application error",
    details: error,
  }
}
