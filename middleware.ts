import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/'],
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Ignore static assets and Next.js internal paths
    "/", // Include the homepage route
    "/(api|trpc)(.*)", // Include API and TRPC routes
  ],
};
