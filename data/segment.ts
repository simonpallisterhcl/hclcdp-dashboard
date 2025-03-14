import { getCampaignId, getToken } from "@/lib/session"
import { Segment } from "@/types/segment"

const getSegments = async () => {
  const token = await getToken()
  const campaignId = await getCampaignId(token)

  const response = await fetch(`${process.env.API_ENDPOINT}/-/v1/advertisers/${campaignId}/dmpSegments?isNewUI=1`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  const { data } = (await response.json()) as { data: Segment[] }

  return data
}

const getSegmentById = async (id: number): Promise<Segment | null> => {
  const segments = await getSegments()
  return segments.find((segment: Segment) => segment.id === id) || null
}

const getSegmentByName = async (name: string): Promise<Segment | null> => {
  const segments = await getSegments()
  return segments.find((segment: Segment) => segment.name.toLowerCase().replaceAll(" ", "-") === name) || null
}

export { getSegments, getSegmentById, getSegmentByName }
