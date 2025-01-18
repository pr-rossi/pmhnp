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
    let mounted = true

    async function fetchUser() {
      try {
        const res = await fetch('/api/users/me')
        const data = await res.json()
        if (mounted) {
          setUser(data)
          setLoading(false)
        }
      } catch (error) {
        console.error('Error fetching user:', error)
        if (mounted) {
          setLoading(false)
        }
      }
    }

    if (status === "authenticated" && session?.user?.email) {
      fetchUser()
    } else if (status === "unauthenticated") {
      setUser(null)
      setLoading(false)
    }

    return () => {
      mounted = false
    }
  }, [session?.user?.email, status])

  return {
    user,
    isAdmin: Boolean(user?.role === "ADMIN"),
    loading,
    isAuthenticated: status === "authenticated"
  }
} 