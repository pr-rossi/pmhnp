'use client'

import { AuthHeader } from "@/components/auth-header"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen flex items-center justify-center">
      <div className="absolute top-4 left-4">
        <AuthHeader />
      </div>
      <div className="w-full max-w-[350px] mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

