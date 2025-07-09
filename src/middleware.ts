import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let url = new URL("http://localhost:3000/store");

  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
