"use client"

import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { MainNav } from '@/components/main-nav'
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const isAuthenticated = !!session
  
  // Hide header on auth pages and all dashboard pages
  if (pathname.startsWith('/dashboard') || pathname === '/login' || pathname === '/register') {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <MobileNav isAuthenticated={isAuthenticated} />
        <MainNav isAuthenticated={isAuthenticated} />
      </div>
    </header>
  )
}

