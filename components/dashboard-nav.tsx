"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { cn } from "@/lib/utils"

export function DashboardNav() {
  const pathname = usePathname()
  const { data: session } = useSession()
  
  console.log('Session in DashboardNav:', session)
  
  const isAdmin = session?.user?.role === "ADMIN"

  return (
    <nav className="grid items-start gap-2">
      <Link
        href="/dashboard"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/dashboard" ? "bg-accent" : "transparent"
        )}
      >
        Overview
      </Link>
      {isAdmin && (
        <Link
          href="/dashboard/users"
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === "/dashboard/users" ? "bg-accent" : "transparent"
          )}
        >
          Users
        </Link>
      )}
    </nav>
  )
} 