/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_URL: process.env.SERVER_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "rezba.com.ua",
            }
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            // issuer: /\.[jt]sx?$/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        });
        return config;
    },
};

export default nextConfig;
