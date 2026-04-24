import type { NextConfig } from "next";

/** Set only u GitHub Actions za Pages (npr. /happy_birthday). Na Vercelu ostavi prazno. */
const basePath = process.env.NEXT_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(basePath
    ? { basePath, trailingSlash: true }
    : { trailingSlash: false }),
};

export default nextConfig;
