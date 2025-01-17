import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.user.delete({
      where: {
        id: params.id,
      },
    })
    return NextResponse.json({ message: "User deleted successfully" })
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting user" },
      { status: 500 }
    )
  }
} 