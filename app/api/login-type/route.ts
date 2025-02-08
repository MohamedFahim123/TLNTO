import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const loginType = body?.loginType;

    if (!loginType || typeof loginType !== "string") {
      return NextResponse.json(
        { message: "loginType missing or invalid" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({
      message: "loginType stored securely",
    });

    response.cookies.set("loginType", loginType, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 86400 * 30,
    });

    return response;
  } catch (error: unknown) {
    console.error("Error storing loginType:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
