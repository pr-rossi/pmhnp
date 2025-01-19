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
    <nav className="flex flex-col h-full min-h-[400px] justify-between px-3">
      <div className="space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-2 mb-8 px-3">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="font-bold text-lg text-primary-foreground">P</span>
          </div>
          <span className="font-bold text-lg">PMHNP Portal</span>
        </Link>
        
        <div className="space-y-1">
          <Link href="/dashboard">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors",
              pathname === "/dashboard" ? "bg-primary/10 text-primary" : "text-muted-foreground",
            )}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </span>
          </Link>
          <Link href="/dashboard/profile">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors",
              pathname === "/dashboard/profile" ? "bg-primary/10 text-primary" : "text-muted-foreground",
            )}>
              <UserCircle className="mr-2 h-4 w-4" />
              Profile
            </span>
          </Link>
          <Link href="/dashboard/progress">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors",
              pathname === "/dashboard/progress" ? "bg-primary/10 text-primary" : "text-muted-foreground",
            )}>
              <LineChart className="mr-2 h-4 w-4" />
              Progress
            </span>
          </Link>
          {isAdmin && (
            <Link href="/dashboard/users">
              <span className={cn(
                "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors",
                pathname === "/dashboard/users" ? "bg-primary/10 text-primary" : "text-muted-foreground",
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
        className="justify-start px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors rounded-lg"
        onClick={handleSignOut}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Log Out
      </Button>
    </nav>
  )
} 