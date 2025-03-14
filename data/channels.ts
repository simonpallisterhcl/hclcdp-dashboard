import { getCampaignId, getToken } from "@/lib/session"
import { Channel } from "@/types/channel"

const getActiveChannels = async () => {
  const token = await getToken()
  const campaignId = await getCampaignId(token)

  const response = await fetch(`${process.env.API_ENDPOINT}/-/v1/advertisers/${campaignId}/dmpAdvChannels`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  const { data } = (await response.json()) as { data: Channel[] }

  return data.filter(channel => channel?.status === 1)
}

const getChannelByName = async (name: string): Promise<Channel | null> => {
  const segments = await getActiveChannels()
  return segments.find((channel: Channel) => channel.displayName.toLowerCase().replaceAll(" ", "-") === name) || null
}

export { getActiveChannels, getChannelByName }
