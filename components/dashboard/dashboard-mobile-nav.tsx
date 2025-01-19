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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
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
  )
} 