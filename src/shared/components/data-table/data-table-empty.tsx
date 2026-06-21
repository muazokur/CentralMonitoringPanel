import { EmptyState } from "@/shared/components/feedback"

type DataTableEmptyProps = {
  title: string
  description?: string
}

export function DataTableEmpty({ title, description }: DataTableEmptyProps) {
  return (
    <EmptyState
      className="m-4 min-h-52 border-0 shadow-none"
      description={description}
      title={title}
    />
  )
}
