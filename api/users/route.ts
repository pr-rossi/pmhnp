import { NextResponse } from "next/server";

export async function GET() {
  // Handle GET request
  return NextResponse.json({ message: "Users API endpoint" });
}

export async function POST() {
  // Handle POST request
  return NextResponse.json({ message: "User created" });
} 