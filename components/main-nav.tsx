"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MainNavProps {
  isAuthenticated: boolean
}

export function MainNav({ isAuthenticated }: MainNavProps) {
  const pathname = usePathname()
  const isOnDashboard = pathname?.startsWith('/dashboard')

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">PMHNP Student Portal</span>
      </Link>
      {!isAuthenticated ? (
        <>
          <Link href="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </>
      ) : (
        <>
          {!isOnDashboard && (
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
          )}
          <Button variant="ghost" onClick={() => signOut()}>
            Log Out
          </Button>
        </>
      )}
    </div>
  )
}

