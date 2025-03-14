import { getChannelByName } from "@/data/channels"
import { Globe, Mail, MessageCircle, MessageSquare, PhoneCall, Smartphone, ThumbsUp, Webhook } from "lucide-react"
import React from "react"

const iconMapping = [
  {
    displayName: "SMS",
    icon: MessageSquare,
  },

  {
    displayName: "Email",
    icon: Mail,
  },
  {
    displayName: "App Push Notification",
    icon: Smartphone,
  },
  {
    displayName: "Onsite Notification",
  },
  {
    displayName: "Web Push Notification",
    icon: Globe,
  },
  {
    displayName: "Notification BOT",
  },

  {
    displayName: "Banner Personalization",
  },
  {
    displayName: "Call Center",
    icon: PhoneCall,
  },

  {
    displayName: "App Push",
    icon: Smartphone,
  },

  {
    displayName: "Alexa",
  },

  {
    displayName: "Google Home",
  },
  {
    displayName: "WhatsApp",
    icon: MessageCircle,
  },

  {
    displayName: "Facebook Export",
    icon: ThumbsUp,
  },

  {
    displayName: "Google Ads Export",
  },

  {
    displayName: "Quote API",
  },
  {
    displayName: "External API",
    icon: Webhook,
  },
  {
    displayName: "InApp Notification",
    icon: Smartphone,
  },

  {
    displayName: "WhatsApp",
    icon: MessageCircle,
  },

  {
    displayName: "OBD",
  },
  {
    displayName: "Journey API",
    icon: Webhook,
  },
]

const ChannelPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params

  const channelData = await getChannelByName(slug)

  const matchedIcon = iconMapping.find(({ displayName }) => channelData?.displayName === displayName)?.icon

  return (
    <h1 className="text-3xl font-bold mb-5 flex items-center gap-2">
      {matchedIcon && React.createElement(matchedIcon, { className: "text-xl" })}
      {channelData?.displayName} Channel
    </h1>
  )
}

export default ChannelPage
