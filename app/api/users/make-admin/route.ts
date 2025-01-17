import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const user = await prisma.user.update({
      where: {
        email: "rossi@pushrefresh.com"
      },
      data: {
        role: "ADMIN"
      }
    })
    return NextResponse.json({ message: "User updated to admin" })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    )
  }
} 