"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface DashboardMobileNavProps {
  isAdmin: boolean
}

export function DashboardMobileNav({ isAdmin }: DashboardMobileNavProps) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <div className="w-full flex items-center justify-between md:hidden p-4">
      <Link href="/dashboard" className="font-bold">
        Dashboard
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
            <Link href="/dashboard" className="font-bold">
              Dashboard
            </Link>
            <Link href="/dashboard/profile">Profile</Link>
            {isAdmin && <Link href="/dashboard/users">Users</Link>}
            <Button variant="ghost" onClick={() => signOut()}>
              Log Out
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
} 