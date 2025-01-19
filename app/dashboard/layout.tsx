import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { prisma } from "@/lib/prisma"
import { DashboardNav } from "@/components/dashboard-nav"
import { MobileNav } from "@/components/mobile-nav"
import { DashboardMobileNav } from "@/components/dashboard/dashboard-mobile-nav"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  if (!session) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email! },
    select: { role: true }
  })

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - flush left */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r bg-muted/30 backdrop-blur-xl pt-6">
        <DashboardNav isAdmin={user?.role === "ADMIN"} />
      </div>

      {/* Mobile nav and main content wrapper */}
      <div className="flex-1 md:pl-64">
        <DashboardMobileNav isAdmin={user?.role === "ADMIN"} />
        <main className="h-full p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

