import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { prisma } from "@/lib/prisma"
import { DashboardNav } from "@/components/dashboard-nav"
import { MobileNav } from "@/components/mobile-nav"

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
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
        <div className="flex flex-col flex-grow border-r bg-muted/30 backdrop-blur-xl pt-5 pb-4 overflow-y-auto">
          <DashboardNav isAdmin={user?.role === "ADMIN"} />
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden">
        <MobileNav isAdmin={user?.role === "ADMIN"} />
      </div>

      {/* Main content */}
      <div className="flex-1 md:pl-64">
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {children}
        </main>
      </div>
    </div>
  )
}

