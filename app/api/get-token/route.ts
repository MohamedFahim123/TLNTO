import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const token = (await cookies()).get("TLNTO_TOKEN")?.value || "";
  const loginType = (await cookies()).get("loginType")?.value || "";

  if (!token) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  return NextResponse.json({ token, loginType });
}
