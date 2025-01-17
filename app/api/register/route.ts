import { hash } from "bcrypt"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendWelcomeEmail } from "@/lib/email"

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()
    
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(password, 10)
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "USER",
      },
    })

    // Send welcome email
    await sendWelcomeEmail(email, name || 'there')

    return NextResponse.json({
      user: {
        email: user.email,
        name: user.name,
      }
    })
  } catch (error: any) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: error.message || "Error creating user" },
      { status: 500 }
    )
  }
}

