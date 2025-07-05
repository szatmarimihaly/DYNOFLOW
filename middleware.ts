import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get("sb-access-token")?.value;
  
    if (!isLoggedIn && request.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  
    return NextResponse.next();
  }
  
  export const config = {
    matcher: ["/admin/:path"],
  };
  