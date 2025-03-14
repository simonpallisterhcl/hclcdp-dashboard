import {
  ChartLine,
  Group,
  LayoutDashboard,
  Settings,
  SlidersVertical,
  User,
  UserRoundPen,
  Workflow,
} from "lucide-react"

import { NavMain } from "@/components/NavMain"
import { NavUser } from "@/components/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SessionData } from "@/types/session"
import Image from "next/image"
import { Separator } from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { getActiveChannels } from "@/data/channels"
import { Channel } from "@/types/channel"
import { MenuItem } from "@/types/menuitem"

const navData: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/cdp/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Customer One View",
    url: "/cdp/customer-one-view",
    icon: User,
  },
  // {
  //   title: "Campaigns",
  //   url: "/cdp/campaigns",
  //   icon: Megaphone,
  // },
  {
    title: "Channels",
    icon: Group,
    items: [],
  },
  {
    title: "Segments",
    url: "/cdp/segments",
    icon: SlidersVertical,
  },
  {
    title: "Data Pipeline",
    icon: Workflow,
    items: [
      {
        title: "Sources",
        url: "/cdp/data-pipeline/sources",
      },
      {
        title: "Destinations",
        url: "/cdp/data-pipeline/destinations",
      },
      {
        title: "Event Dictionary",
        url: "/cdp/data-pipeline/event-dictionary",
      },
    ],
  },
  {
    title: "Profile Management",
    icon: UserRoundPen,
    items: [
      {
        title: "Offline Data Sources",
        url: "/cdp/profile-management/offline-data-sources",
      },
      {
        title: "Customer Properties",
        url: "/cdp/profile-management/customer-properties",
      },
      {
        title: "Profile Upload",
        url: "/cdp/profile-management/profile-upload",
      },
    ],
  },
  {
    title: "Analytics",
    icon: ChartLine,
    items: [
      {
        title: "Campaign Summary",
        url: "/cdp/analytics/campaign-summary",
      },
      {
        title: "User Journey",
        url: "#",
        items: [
          {
            title: "Funnel",
            url: "#",
          },
          {
            title: "Path",
            url: "#",
          },
          {
            title: "Cohort",
            url: "#",
          },
        ],
      },
      {
        title: "Events",
        url: "#",
        items: [
          {
            title: "Dashboard",
            url: "#",
          },
          {
            title: "Occurance",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    items: [
      {
        title: "Product Labels",
        url: "/cdp/settings/product-labels",
      },
      {
        title: "Frequency Caps",
        url: "/cdp/settings/frequency-caps",
      },
      {
        title: "Contacts",
        url: "/cdp/settings/contacts",
      },
      {
        title: "Lead & Conversion Events",
        url: "/cdp/settings/lead-conversion-events",
      },
      {
        title: "Customer One View",
        url: "/cdp/settings/customer-one-view",
      },
    ],
  },
]

const AppSidebar = async ({
  sessionData,
  ...props
}: { sessionData: SessionData } & React.ComponentProps<typeof Sidebar>) => {
  const activeChannels: Channel[] = await getActiveChannels()

  const channelData = navData.find(item => item.title === "Channels")

  if (channelData) {
    channelData.items = activeChannels.map(
      (channel): MenuItem => ({
        title: channel.displayName,
        url: `/cdp/channels/${channel.displayName.toLowerCase().replaceAll(" ", "-")}`,
      }),
    )

    console.log(navData[3])

    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="p-5">
                <Link href="/cdp">
                  <Image alt={"HCL CDP"} src="/images/hclcdplogo.svg" width={150} height={75} />
                </Link>
              </div>
            </SidebarMenuItem>
            <Separator />
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={navData} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser currentUser={sessionData.currentUser} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    )
  }
}

export default AppSidebar
