import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export default async function middleware(request: NextRequest) {
  const { userId } = await getAuth(request);
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const isPublicPath = path === "/" || 
    path.startsWith("/api") || 
    path.startsWith("/sign-in") || 
    path.startsWith("/sign-up");

  if (!userId && !isPublicPath) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("redirect_url", path);
    return NextResponse.redirect(signInUrl);
  }

  if (userId && (path === "/sign-in" || path === "/sign-up")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 