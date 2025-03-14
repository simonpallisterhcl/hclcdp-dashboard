import { verifySession } from "@/lib/session"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Breadcrumb from "@/components/Breadcrumb"
import { SessionData } from "@/types/session"
import AppSidebar from "@/components/Sidebar"

const DashboardLayout = async ({ children }: { children: React.ReactNode; pageTitle: string }) => {
  const sessionData: SessionData = await verifySession()

  return (
    <SidebarProvider>
      <AppSidebar sessionData={sessionData} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <Breadcrumb />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
