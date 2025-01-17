import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/register')
    const isAdminPage = req.nextUrl.pathname.startsWith('/admin')

    // Redirect authenticated users away from auth pages
    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Allow public pages and auth pages
    if (!isAuth && !isAdminPage) {
      return null
    }

    // Check admin access - add console.log to debug
    console.log('Token:', token)
    if (isAdminPage && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return null
  },
  {
    callbacks: {
      authorized: () => true // Let the middleware function handle auth
    },
  }
)

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/login', '/register']
} 