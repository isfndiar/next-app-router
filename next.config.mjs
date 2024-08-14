/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
        protocol: "https",
        pathname: "/**",
        port: "",
      },
      {
        hostname: "static.nike.com",
        protocol: "https",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
