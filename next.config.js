/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['media.rawg.io','img.itch.zone','images.asos-media.com']
  }
}

module.exports = nextConfig
