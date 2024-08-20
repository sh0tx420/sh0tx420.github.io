import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
};

const withMDX = createMDX();

export default withMDX(nextConfig);
