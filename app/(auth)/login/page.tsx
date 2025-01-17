import { AuthForm } from '@/components/forms/auth-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <AuthForm type="login" />
      </div>
    </div>
  )
} 