"use client"

import Link from 'next/link'
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { MainNav } from '@/components/main-nav'
import { MobileNav } from "@/components/mobile-nav"
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const { data: session } = useSession()
  const isAuthenticated = !!session

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MobileNav isAuthenticated={isAuthenticated} />
        <MainNav isAuthenticated={isAuthenticated} />
      </div>
    </header>
  )
}

