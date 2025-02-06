import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const loginType = (await cookies()).get("loginType")?.value || "";

  if (!loginType) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  return NextResponse.json({ loginType });
}
