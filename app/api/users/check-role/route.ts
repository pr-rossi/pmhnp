import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: "rossi@pushrefresh.com"
      },
      select: {
        id: true,
        email: true,
        role: true
      }
    })
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 })
  }
} 