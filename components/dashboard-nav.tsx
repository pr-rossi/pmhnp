"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DashboardNavProps {
  isAdmin: boolean
}

export function DashboardNav({ isAdmin }: DashboardNavProps) {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2">
      <Link href="/" className="flex items-center space-x-2 mb-4">
        <span className="font-bold">PMHNP Student Portal</span>
      </Link>
      <Link href="/dashboard">
        <span className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/dashboard" ? "bg-accent" : "transparent",
        )}>
          Dashboard
        </span>
      </Link>
      <Link href="/dashboard/profile">
        <span className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/dashboard/profile" ? "bg-accent" : "transparent",
        )}>
          Profile
        </span>
      </Link>
      <Link href="/dashboard/progress">
        <span className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/dashboard/progress" ? "bg-accent" : "transparent",
        )}>
          Progress
        </span>
      </Link>
      {isAdmin && (
        <Link href="/dashboard/users">
          <span className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === "/dashboard/users" ? "bg-accent" : "transparent",
          )}>
            Users
          </span>
        </Link>
      )}
      <Button 
        variant="ghost" 
        className="justify-start px-3"
        onClick={() => signOut()}
      >
        Log Out
      </Button>
    </nav>
  )
} 