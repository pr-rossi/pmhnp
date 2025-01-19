"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  isAdmin: boolean
}

export function MobileNav({ isAdmin }: MobileNavProps) {
  const pathname = usePathname()
  const { data: session } = useSession()
  const isOnDashboard = pathname?.startsWith('/dashboard')

  return (
    <div className="flex flex-col space-y-4 p-4 md:hidden">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold">Clarity Education Systems</span>
      </Link>
      <nav className="flex flex-col space-y-2">
        <Link
          href="/about"
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground/80",
            pathname === "/about" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About
        </Link>
        <Link
          href="/programs"
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground/80",
            pathname === "/programs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Programs
        </Link>
        <Link
          href="/resources"
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground/80",
            pathname?.startsWith("/resources") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Free Resources
        </Link>
        <div className="flex flex-col space-y-2 pt-4">
          {session ? (
            isOnDashboard ? (
              <Button 
                variant="ghost" 
                onClick={() => signOut()}
                className="w-full justify-start"
              >
                Log Out
              </Button>
            ) : (
              <Link href="/dashboard">
                <Button variant="ghost" className="w-full justify-start">
                  Go to Dashboard
                </Button>
              </Link>
            )
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  )
}

