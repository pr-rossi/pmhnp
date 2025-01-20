'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Home, BookOpen, Settings, LogOut, Target, Calendar, Bell, HelpCircle } from 'lucide-react'
import { signOut } from 'next-auth/react'

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "My Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    title: "Progress",
    href: "/dashboard/progress",
    icon: Target,
  },
  {
    title: "Schedule",
    href: "/dashboard/schedule",
    icon: Calendar,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/dashboard/support",
    icon: HelpCircle,
  },
]

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

export function Sidebar({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "hidden md:flex flex-col h-screen border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="flex h-[60px] items-center px-6 border-b">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          <span className="font-bold">PMHNP Portal</span>
        </Link>
      </div>

      <div className="flex-1 p-6">
        <h2 className="mb-4 px-2 text-lg font-semibold tracking-tight">
          Menu
        </h2>
        <SidebarNavItems items={sidebarNavItems} />
      </div>

      <div className="p-6 border-t">
        <div className="mb-4 px-2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          <div className="flex flex-col">
            <span className="font-medium text-sm">John Doe</span>
            <span className="text-xs text-muted-foreground">Student</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full justify-start hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </nav>
  )
}

function SidebarNavItems({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-[calc(100vh-14rem)]">
      <div className="space-y-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all",
                pathname === item.href ? 
                  "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : 
                  "text-muted-foreground hover:text-white"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </span>
          </Link>
        ))}
      </div>
    </ScrollArea>
  )
}

