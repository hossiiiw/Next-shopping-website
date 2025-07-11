import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const url = "http://localhost:3000/login";

  if (token) {
    return NextResponse.next();
  }
  // const url = new URL(request.url);
  // url.pathname = "/login";
  // return NextResponse.redirect(url.toString());\

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
