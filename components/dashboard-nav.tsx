"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  LayoutDashboard, 
  UserCircle, 
  LineChart, 
  Users, 
  LogOut, 
  BookOpen,
  Calendar,
  Bell,
  Settings,
  HelpCircle
} from "lucide-react"

interface DashboardNavProps {
  isAdmin: boolean
}

export function DashboardNav({ isAdmin }: DashboardNavProps) {
  const pathname = usePathname()

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <nav className="flex flex-col h-full min-h-[400px] justify-between px-3 pb-3">
      <div className="space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-2 mb-8 px-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
            <span className="font-bold text-lg text-white">P</span>
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            PMHNP Portal
          </span>
        </Link>
        
        <div className="space-y-1">
          <Link href="/dashboard">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              "hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:text-purple-600",
              pathname === "/dashboard" 
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                : "text-muted-foreground"
            )}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </span>
          </Link>

          <Link href="/dashboard/courses">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              "hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:text-purple-600",
              pathname === "/dashboard/courses" 
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                : "text-muted-foreground"
            )}>
              <BookOpen className="mr-2 h-4 w-4" />
              My Courses
            </span>
          </Link>

          <Link href="/dashboard/profile">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              "hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:text-purple-600",
              pathname === "/dashboard/profile" 
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                : "text-muted-foreground"
            )}>
              <UserCircle className="mr-2 h-4 w-4" />
              Profile
            </span>
          </Link>

          <Link href="/dashboard/progress">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              "hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:text-purple-600",
              pathname === "/dashboard/progress" 
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                : "text-muted-foreground"
            )}>
              <LineChart className="mr-2 h-4 w-4" />
              Progress
            </span>
          </Link>

          <Link href="/dashboard/schedule">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              "hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:text-purple-600",
              pathname === "/dashboard/schedule" 
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                : "text-muted-foreground"
            )}>
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </span>
          </Link>

          {isAdmin && (
            <Link href="/dashboard/users">
              <span className={cn(
                "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                "hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:text-purple-600",
                pathname === "/dashboard/users" 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                  : "text-muted-foreground"
              )}>
                <Users className="mr-2 h-4 w-4" />
                Users
              </span>
            </Link>
          )}

          <Link href="/dashboard/settings">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              "hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:text-purple-600",
              pathname === "/dashboard/settings" 
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                : "text-muted-foreground"
            )}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </span>
          </Link>

          <Link href="/dashboard/help">
            <span className={cn(
              "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              "hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:text-purple-600",
              pathname === "/dashboard/help" 
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                : "text-muted-foreground"
            )}>
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </span>
          </Link>
        </div>
      </div>

      <Button 
        variant="ghost" 
        className="justify-start px-3 py-2.5 text-sm font-medium transition-all rounded-lg
                   hover:bg-gradient-to-r hover:from-red-600/10 hover:to-red-600/10 hover:text-red-600"
        onClick={handleSignOut}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Log Out
      </Button>
    </nav>
  )
} 