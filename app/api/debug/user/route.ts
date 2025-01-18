import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const user = await prisma.user.findUnique({
    where: {
      email: "rossi@pushrefresh.com"
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true
    }
  })
  return NextResponse.json(user)
} 