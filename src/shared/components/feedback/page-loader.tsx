import { LoadingState } from "@/shared/components/feedback/loading-state"

export function PageLoader() {
  return (
    <div className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-4">
      <LoadingState label="Loading page" />
    </div>
  )
}
