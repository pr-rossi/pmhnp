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
      console.log('Auth - JWT Callback Input:', { token, user })
      
      if (user) {
        token.role = user.role
        token.id = user.id
      }

      console.log('Auth - JWT Callback Output:', token)
      return token
    },
    async session({ session, token }) {
      console.log('Auth - Session Callback Input:', { session, token })
      
      if (session.user && token.sub) {
        session.user.role = token.role as string
        session.user.id = token.sub
      }

      console.log('Auth - Session Callback Output:', session)
      return session
    }
  }
} 