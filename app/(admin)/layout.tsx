import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AdminSidebar } from '@/components/admin/sidebar'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarTrigger />
      <main>{children}</main>
    </SidebarProvider>
  )
}
