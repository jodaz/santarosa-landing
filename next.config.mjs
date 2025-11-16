/** @type {import('next').NextConfig} */
const nextConfig = {
    // Only use static export for production builds, not during development
    // output: process.env.NODE_ENV === "production" && process.env.IS_LOCAL_DEV !== "true" ? "export" : undefined,
    // distDir: "./dist", // Changes the build output directory to `./dist/`.
    basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Sets the base path to `/some-base-path`.
    images: { unoptimized: true },
    assetPrefix: process.env.NODE_ENV === "production" ? "./" : undefined,
};

export default nextConfig;
