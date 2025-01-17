import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { prisma } from "./prisma"

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) {
          return null
        }

        const isValid = await compare(credentials.password, user.password)

        if (!isValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      console.log('JWT callback - user:', user)
      console.log('JWT callback - token:', token)
      
      if (trigger === "update") {
        // Get fresh user data
        const freshUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true }
        })
        if (freshUser) {
          token.role = freshUser.role
        }
      }
      
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      console.log('Session callback - token:', token)
      
      if (token && session.user) {
        session.user.role = token.role
        session.user.id = token.sub
      }
      return session
    }
  }
} 