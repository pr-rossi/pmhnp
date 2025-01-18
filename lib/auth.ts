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
          where: { email: credentials.email },
          select: {
            id: true,
            email: true,
            name: true,
            password: true,
            role: true
          }
        })

        if (!user) {
          return null
        }

        const isValid = await compare(credentials.password, user.password)

        if (!isValid) {
          return null
        }

        console.log('Authorize returning user:', user)

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
      if (user) {
        token.id = user.id
        token.role = user.role
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.email = token.email as string
        session.user.name = token.name as string
      }
      return session
    }
  },
  events: {
    async signIn({ user }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: user.email as string },
        select: { role: true }
      })
      if (dbUser) {
        user.role = dbUser.role
      }
    },
    async session({ session }) {
      console.log('Auth - Session Event:', session)
    }
  }
} 