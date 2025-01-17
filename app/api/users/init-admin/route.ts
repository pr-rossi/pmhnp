import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    // First find the user
    const existingUser = await prisma.user.findUnique({
      where: {
        email: "rossi@pushrefresh.com"
      }
    })

    console.log("Existing user:", existingUser)

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Update to admin
    const user = await prisma.user.update({
      where: {
        email: "rossi@pushrefresh.com"
      },
      data: {
        role: "ADMIN"
      }
    })

    console.log("Updated user:", user)

    return NextResponse.json({ 
      message: "Initial admin created",
      user
    })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: "Failed to create admin" },
      { status: 500 }
    )
  }
} 