"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, UserCircle, LineChart, Users, LogOut } from "lucide-react"

interface DashboardNavProps {
  isAdmin: boolean
}

export function DashboardNav({ isAdmin }: DashboardNavProps) {
  const pathname = usePathname()

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <nav className="flex flex-col h-full min-h-[400px] justify-between">
      <div className="space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-2 mb-6 px-3">
          <span className="font-bold text-lg">PMHNP Student Portal</span>
        </Link>
        
        <div className="space-y-1">
          <Link href="/dashboard">
            <span className={cn(
              "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
              pathname === "/dashboard" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </span>
          </Link>
          <Link href="/dashboard/profile">
            <span className={cn(
              "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
              pathname === "/dashboard/profile" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}>
              <UserCircle className="mr-2 h-4 w-4" />
              Profile
            </span>
          </Link>
          <Link href="/dashboard/progress">
            <span className={cn(
              "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
              pathname === "/dashboard/progress" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}>
              <LineChart className="mr-2 h-4 w-4" />
              Progress
            </span>
          </Link>
          {isAdmin && (
            <Link href="/dashboard/users">
              <span className={cn(
                "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                pathname === "/dashboard/users" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}>
                <Users className="mr-2 h-4 w-4" />
                Users
              </span>
            </Link>
          )}
        </div>
      </div>

      <Button 
        variant="ghost" 
        className="justify-start px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        onClick={handleSignOut}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Log Out
      </Button>
    </nav>
  )
} 