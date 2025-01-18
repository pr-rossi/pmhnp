"use client"

import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name: string
  role: string
}

export function useAuth() {
  const { data: session } = useSession()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (session?.user?.email) {
      fetch('/api/users/me')
        .then(res => res.json())
        .then(data => setUser(data))
    }
  }, [session])

  return { user, isAdmin: user?.role === "ADMIN" }
} 