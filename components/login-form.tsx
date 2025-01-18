"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
    }
  }, [status, router])
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // First check if user exists
      const checkUser = await fetch(`/api/users/check?email=${encodeURIComponent(email)}`)
      const { exists } = await checkUser.json()

      if (!exists) {
        toast.message("Account not found", {
          description: "There is not a user with that email. Try again.",
          duration: 5000,
        })
        setIsLoading(false)
        return
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.message("Login failed", {
          description: "Invalid password. Please try again.",
          duration: 5000,
        })
        setIsLoading(false)
        return
      }

      toast.success("Welcome back!")
      router.refresh()
      router.push("/dashboard")
    } catch (error) {
      console.error('Login error:', error)
      toast.message("Error", {
        description: "Something went wrong. Please try again.",
        duration: 5000,
      })
      setIsLoading(false)
    }
  }

  if (status === "loading" || status === "authenticated") {
    return null
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Sign In"}
        </Button>
      </form>
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link 
          href="/register" 
          className="font-semibold text-primary hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
} 