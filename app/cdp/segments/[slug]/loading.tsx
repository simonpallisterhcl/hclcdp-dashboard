import { Skeleton } from "@/components/ui/skeleton"

const SegmentsLoading = () => {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="h-6 w-10" />
      <Skeleton className="h-8 w-24" />
    </div>
  )
}

export default SegmentsLoading
