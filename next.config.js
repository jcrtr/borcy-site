const isProd = process.env.NODE_ENV === 'production'


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: ""
    },
    basePath: isProd ? "/get-vpn-site" : '',
    assetPrefix: isProd ? "/get-vpn-site" : ''
};

module.exports = nextConfig;