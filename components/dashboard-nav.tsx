"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

export function DashboardNav() {
  const pathname = usePathname()
  const { isAdmin } = useAuth()

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
      <Link
        href="/dashboard/profile"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/dashboard/profile" ? "bg-accent" : "transparent"
        )}
      >
        Profile
      </Link>
      <Link
        href="/dashboard/progress"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/dashboard/progress" ? "bg-accent" : "transparent"
        )}
      >
        Progress
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