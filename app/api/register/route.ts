import { hash } from "bcrypt"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Received registration request:", body) // Debug log

    const { email, password, name } = body
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      console.log("User already exists:", email) // Debug log
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
      },
    })
    console.log("Created user:", user.email) // Debug log

    return NextResponse.json({
      user: {
        email: user.email,
        name: user.name,
      }
    })
  } catch (error) {
    console.error("Registration error:", error) // Debug log
    return NextResponse.json(
      { error: "Error creating user" },
      { status: 500 }
    )
  }
}

