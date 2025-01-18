"use client"

import Link from 'next/link'
import { useSession } from "next-auth/react"
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const { data: session, status } = useSession()
  const [mounted, setMounted] = useState(false)
  const isAuthenticated = status === "authenticated"

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until we know the auth state
  if (!mounted || status === "loading") {
    return null
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav isAuthenticated={isAuthenticated} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

