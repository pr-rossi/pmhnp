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
  const { data: session, status } = useSession()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return

    if (session?.user?.email) {
      fetch('/api/users/me')
        .then(res => res.json())
        .then(data => {
          setUser(data)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [session, status])

  return { 
    user, 
    isAdmin: user?.role === "ADMIN",
    loading 
  }
} 