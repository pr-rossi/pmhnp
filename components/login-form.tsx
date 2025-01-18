"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface LoginFormValues {
  email: string
  password: string
}

export function LoginForm() {
  const router = useRouter()
  
  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        toast.error("Invalid credentials")
        return
      }

      // Force a page refresh when redirecting
      window.location.href = "/dashboard"
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  // ... rest of the component
} 