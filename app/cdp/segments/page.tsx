import { SlidersVertical } from "lucide-react"
import SegmentList from "./components/SegmentList"
import { getSegments } from "@/data/segment"

const SegmentsPage = async () => {
  const data = await getSegments()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5 flex items-center gap-2">
        <SlidersVertical className="text-xl" /> Segments
      </h1>

      <SegmentList segments={data} />
    </div>
  )
}
export default SegmentsPage
