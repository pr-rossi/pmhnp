import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    // Simple query to test connection
    const result = await prisma.$queryRaw`SELECT NOW()`
    return NextResponse.json({ success: true, time: result })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json(
      { error: 'Failed to connect to database' },
      { status: 500 }
    )
  }
} 