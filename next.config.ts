import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ensure output file tracing root is the repo root so Next can
  // correctly resolve trace roots when multiple lockfiles exist.
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
