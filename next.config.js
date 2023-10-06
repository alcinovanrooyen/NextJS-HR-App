/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    env: {
        mongoDbUri: 'mongodb://localhost:27017'
    }
}

module.exports = nextConfig
