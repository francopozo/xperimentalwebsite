import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getStudioAuthCredentials } from "@/lib/studio-auth";

function createStudioHeaders() {
  return {
    "X-Robots-Tag": "noindex, nofollow, noarchive",
  };
}

function unauthorizedResponse() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      ...createStudioHeaders(),
      "WWW-Authenticate": 'Basic realm="Sanity Studio"',
    },
  });
}

function isAuthorized(request: NextRequest, username: string, password: string) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return false;
  }

  const encodedCredentials = authorization.slice("Basic ".length);
  const decodedCredentials = atob(encodedCredentials);
  const [providedUsername, ...passwordParts] = decodedCredentials.split(":");
  const providedPassword = passwordParts.join(":");

  return providedUsername === username && providedPassword === password;
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/studio") === false) {
    return NextResponse.next();
  }

  const credentials = getStudioAuthCredentials();

  if (
    process.env.NODE_ENV === "production" &&
    credentials &&
    !isAuthorized(request, credentials.username, credentials.password)
  ) {
    return unauthorizedResponse();
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", createStudioHeaders()["X-Robots-Tag"]);
  return response;
}

export const config = {
  matcher: ["/studio/:path*"],
};
