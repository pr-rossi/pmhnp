import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Toaster } from "sonner"

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { ThemeToggle } from '@/components/theme-toggle'
import { Providers } from "@/components/providers"
import { SessionProvider } from "@/components/session-provider"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'PMHNP Student Portal',
    template: '%s | PMHNP Student Portal',
  },
  description: 'Advanced PMHNP education and certification preparation',
  keywords: ['PMHNP', 'education', 'certification', 'nursing', 'psychiatric'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        <SessionProvider>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <ThemeToggle />
                <Toaster richColors closeButton position="top-center" />
              </div>
            </ThemeProvider>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  )
}

