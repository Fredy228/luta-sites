/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
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
