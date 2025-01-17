import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST() {
  try {
    // Force raw update
    const result = await prisma.$executeRaw`
      UPDATE "User" 
      SET role = 'ADMIN' 
      WHERE email = 'rossi@pushrefresh.com';
    `
    
    // Verify the update
    const user = await prisma.user.findUnique({
      where: { email: "rossi@pushrefresh.com" },
      select: { id: true, email: true, role: true }
    })
    
    return NextResponse.json({ result, user })
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json({ error: "Failed to update" }, { status: 500 })
  }
} 