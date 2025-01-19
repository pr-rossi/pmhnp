'use client'

import { AuthHeader } from "@/components/auth-header"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="container relative min-h-screen flex items-center justify-center">
      <div className="absolute top-4 left-4">
        <AuthHeader />
      </div>
      <div className="w-full max-w-[350px] mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

