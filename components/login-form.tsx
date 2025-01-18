"use client"

import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      console.log('LoginForm - Starting sign in')
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      console.log('LoginForm - Sign in result:', result)

      if (result?.error) {
        toast.error("Invalid credentials")
        return
      }

      console.log('LoginForm - Redirecting to dashboard')
      window.location.replace("/dashboard")
    } catch (error) {
      console.error('LoginForm - Error:', error)
      toast.error("Something went wrong")
    }
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