"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isAuthenticated: boolean
}

export function MobileNav({ isAuthenticated }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  // Hide mobile nav on dashboard routes
  if (pathname.startsWith('/dashboard')) {
    return null
  }

  const routes = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/programs",
      label: "Programs",
    },
    {
      href: "/resources",
      label: "Resources",
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ]

  return (
    <div className="w-full flex items-center justify-between md:hidden p-4">
      <Link href="/" className="font-bold">
        PMHNP Student Portal
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <nav className="flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
                onClick={() => setOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            {!isAuthenticated ? (
              <>
                <Link href="/login" onClick={() => setOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </>
            ) : (
              <Link href="/dashboard" onClick={() => setOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Dashboard
                </Button>
              </Link>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

