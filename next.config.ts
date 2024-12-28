// next.config.js
const nextConfig = {
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
    // Adding the rule for handling SVG files for normal Webpack (fallback)
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Optional: Adds width/height automatically for icons
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
