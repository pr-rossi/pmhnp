"use client"

import Link from 'next/link'
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { MainNav } from '@/components/main-nav'
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const { data: session, status } = useSession()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isAuthenticated = status === "authenticated"
  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname?.startsWith('/dashboard')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isAuthPage) {
    return null
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav isAuthenticated={isAuthenticated} />
      </div>
    </header>
  )
}

