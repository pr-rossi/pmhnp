'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Home, BookOpen, Settings, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

const sidebarNavItems = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "My Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
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
        "flex flex-col border-r bg-background",
        className
      )}
    >
      <div className="p-6">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Dashboard
        </h2>
        <SidebarNavItems items={sidebarNavItems} />
      </div>
      <div className="mt-auto p-6">
        <Button
          variant="outline"
          className="w-full justify-start"
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
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="space-y-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent" : "transparent"
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

