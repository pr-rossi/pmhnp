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
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          PMHNP Student Portal
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/about" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About
        </Link>
        <Link
          href="/programs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/programs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Programs
        </Link>
        <Link
          href="/resources"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/resources") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Resources
        </Link>
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Blog
        </Link>
        <div className="flex items-center space-x-4">
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
      </nav>
    </div>
  )
}

