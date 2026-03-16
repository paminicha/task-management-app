import { NextRequest, NextResponse } from "next/server"
import { db_task } from "@/Data/db_task"

export async function PUT(request: NextRequest) {
  const body = await request.json()

  const updated = db_task.update(body)

  return NextResponse.json(updated)
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  db_task.delete(id)

  return NextResponse.json({ success: true })
}