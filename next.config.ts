import type { NextConfig } from "next";

const repoName =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
    : "");

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: repoName || undefined,
  assetPrefix: repoName || undefined,
  trailingSlash: true,
};

export default nextConfig;
