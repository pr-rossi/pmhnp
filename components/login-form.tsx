"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { data: session, status } = useSession()

  // Redirect if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
    }
  }, [status, router])
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.error("Invalid credentials")
        return
      }

      // Wait for session to be updated
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Force a session update and redirect
      router.refresh()
      router.push("/dashboard")
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  if (status === "loading" || status === "authenticated") {
    return null
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  )
} 