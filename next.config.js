/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['media.rawg.io','img.itch.zone']
  }
}

module.exports = nextConfig
