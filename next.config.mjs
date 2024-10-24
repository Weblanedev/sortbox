/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["cdn.sanity.io", "th.bing.com", 'fullstackdotso.nyc3.cdn.digitaloceanspaces.com', 'example.com'],
  },
}

export default nextConfig
