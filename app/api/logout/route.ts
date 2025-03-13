import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ message: "Logged out successfully" });

    response.cookies.set("TLNTO_TOKEN", '', {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
