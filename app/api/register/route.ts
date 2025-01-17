import { hash } from "bcrypt"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Received registration request:", body)

    const { email, password, name } = body
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      console.log("User already exists:", email)
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(password, 10)
    
    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      })
      console.log("Created user:", user.email)

      return NextResponse.json({
        user: {
          email: user.email,
          name: user.name,
        }
      })
    } catch (dbError) {
      console.error("Database error:", dbError)
      throw dbError
    }
  } catch (error: any) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: error.message || "Error creating user" },
      { status: 500 }
    )
  }
}

