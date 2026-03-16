import { NextRequest, NextResponse } from "next/server"
import { db_event } from "@/Data/db_event"

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const body = await request.json()

  const updated = db_event.update(id, body)

  return NextResponse.json(updated)
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  db_event.delete(id)

  return NextResponse.json({ success: true })
}