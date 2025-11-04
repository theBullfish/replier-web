import { NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET() {
  try {
    await db.execute("select 1");
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
