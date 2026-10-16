import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except API routes, static assets, icons,
     * robots/sitemaps, and any file with an extension (png, json, xml, ...)
     */
    "/((?!api/|_next/static|_next/image|favicon.ico|robots.txt|sitemap|sitemaps/|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
