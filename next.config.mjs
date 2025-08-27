/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.IS_LOCAL_DEV === "true" ? undefined : "export",
    distDir: "./dist", // Changes the build output directory to `./dist/`.
    basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Sets the base path to `/some-base-path`.
    images: { unoptimized: true },
    assetPrefix: "./",
};

export default nextConfig;
