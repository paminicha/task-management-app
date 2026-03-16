import { NextRequest, NextResponse } from "next/server"
import { db_event } from "@/Data/db_event"

export async function GET() {
  return NextResponse.json(db_event.get())
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  return NextResponse.json(db_event.create(body))
}