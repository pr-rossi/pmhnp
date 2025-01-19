"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileNavProps {
  isAdmin: boolean
}

export function MobileNav({ isAdmin }: MobileNavProps) {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden fixed top-4 left-4 p-2"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center border-b p-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-lg text-primary-foreground">P</span>
              </div>
              <span className="font-bold text-lg">PMHNP Portal</span>
            </Link>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/dashboard">
              <span className={cn(
                "block px-2 py-2 rounded-lg transition-colors",
                pathname === "/dashboard" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5"
              )}>
                Dashboard
              </span>
            </Link>
            <Link href="/dashboard/profile">
              <span className={cn(
                "block px-2 py-2 rounded-lg transition-colors",
                pathname === "/dashboard/profile" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5"
              )}>
                Profile
              </span>
            </Link>
            <Link href="/dashboard/progress">
              <span className={cn(
                "block px-2 py-2 rounded-lg transition-colors",
                pathname === "/dashboard/progress" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5"
              )}>
                Progress
              </span>
            </Link>
            {isAdmin && (
              <Link href="/dashboard/users">
                <span className={cn(
                  "block px-2 py-2 rounded-lg transition-colors",
                  pathname === "/dashboard/users" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5"
                )}>
                  Users
                </span>
              </Link>
            )}
          </nav>

          <div className="border-t p-4">
            <Button 
              variant="ghost" 
              onClick={() => signOut({ callbackUrl: '/' })}
              className="w-full justify-start text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
            >
              Log Out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

