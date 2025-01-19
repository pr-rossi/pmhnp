"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'

interface MobileNavProps {
  isAdmin: boolean
}

export function MobileNav({ isAdmin }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()
  const isOnDashboard = pathname?.startsWith('/dashboard')

  return (
    <>
      <Button
        variant="ghost"
        className="md:hidden fixed top-4 right-4 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <div className="flex items-center justify-between">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <span className="font-bold">PMHNP Portal</span>
              </Link>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                ✕
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-2">
              <Link href="/dashboard">
                <span className={cn(
                  "block px-2 py-1 text-lg",
                  pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
                )}>
                  Dashboard
                </span>
              </Link>
              <Link href="/dashboard/profile">
                <span className={cn(
                  "block px-2 py-1 text-lg",
                  pathname === "/dashboard/profile" ? "text-primary" : "text-muted-foreground"
                )}>
                  Profile
                </span>
              </Link>
              <Link href="/dashboard/progress">
                <span className={cn(
                  "block px-2 py-1 text-lg",
                  pathname === "/dashboard/progress" ? "text-primary" : "text-muted-foreground"
                )}>
                  Progress
                </span>
              </Link>
              {isAdmin && (
                <Link href="/dashboard/users">
                  <span className={cn(
                    "block px-2 py-1 text-lg",
                    pathname === "/dashboard/users" ? "text-primary" : "text-muted-foreground"
                  )}>
                    Users
                  </span>
                </Link>
              )}
              <Button 
                variant="ghost" 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="w-full justify-start text-lg text-muted-foreground"
              >
                Log Out
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

