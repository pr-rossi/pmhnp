'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // This is a placeholder for the actual API call
      // You would typically send a request to your backend here
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Subscribed!",
        description: "You've successfully signed up for our newsletter.",
      })
      setEmail('')
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem signing up for the newsletter.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
      <p>Stay updated with the latest PMHNP news, study tips, and program offers.</p>
      <div className="flex space-x-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  )
}

