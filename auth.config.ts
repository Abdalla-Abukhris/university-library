// auth.config.ts
import type { NextRequest } from "next/server";

type NextAuthConfig = Parameters<typeof import("next-auth").default>[0];

const authConfig: NextAuthConfig = {
  pages: { signIn: "/sign-in" },
  callbacks: {
    authorized({
      auth,
      request,
    }: {
      auth: { user?: unknown } | null;
      request: NextRequest;
    }) {
      const isLoggedIn = !!auth?.user;
      const path = request.nextUrl.pathname;

      const protectedPrefixes = ["/admin", "/dashboard"];
      return protectedPrefixes.some((p) => path.startsWith(p))
        ? isLoggedIn
        : true;
    },
  },
};

export default authConfig;
