import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const region = req.cookies.get("region") || "default-region";

    if (url.pathname === "/") {
        url.pathname = `/${region}`;
        return NextResponse.redirect(url);
    };

    return NextResponse.next();
};