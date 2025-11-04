import { NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET() {
  try {
    // Why: confirms DB connectivity w/ trivial query
    await db.execute("select 1");
    return NextResponse.json({ ok: true });
  } catch (err) {
    // Why: surface error to confirm env/db issues
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
