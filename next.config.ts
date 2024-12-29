// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static5.depositphotos.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static7.depositphotos.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "st5.depositphotos.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack(config: any, { isServer }: any) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
