import { Switch } from "@/components/ui/switch"
import { getSegmentByName } from "@/data/segment"
import { Segment } from "@/types/segment"

const SegmentPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params

  const data: Segment | null = await getSegmentByName(slug)

  if (!data) {
    return <div>Segment not found</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        <span className="pr-5">
          <Switch checked={data.isActive === 1} />
        </span>
        {data.name}
      </h1>
    </div>
  )
}

export default SegmentPage
