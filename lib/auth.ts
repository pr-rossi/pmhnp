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
    async jwt({ token, user }) {
      console.log('JWT Callback - Input:', { token, user })
      
      if (user) {
        // On sign in
        token.role = user.role
        token.email = user.email
        token.name = user.name
        token.id = user.id
      } else if (token.email) {
        // On subsequent requests
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email },
          select: { id: true, role: true, name: true, email: true }
        })
        if (dbUser) {
          token.role = dbUser.role
          token.id = dbUser.id
        }
      }

      console.log('JWT Callback - Output token:', token)
      return token
    },
    async session({ session, token }) {
      console.log('Session Callback - Input:', { session, token })
      
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.email = token.email
        session.user.name = token.name
      }

      console.log('Session Callback - Output session:', session)
      return session
    }
  }
} 