"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface DashboardNavProps {
  isAdmin: boolean
}

export function DashboardNav({ isAdmin }: DashboardNavProps) {
  const pathname = usePathname()

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