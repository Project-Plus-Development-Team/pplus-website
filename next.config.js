const path = require("path");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const BundleAnalyzer = require("@next/bundle-analyzer");

// TODO switch to ESM when this is fixed
// https://github.com/vercel/next.js/issues/33693

module.exports = phase => {
  /**
   * @type {import("next").NextConfig}
   */
  const nextConfig = {
    swcMinify: true,
    /** @param {import("webpack").Configuration} config */
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });

      config.module.rules.push({
        test: /.*topo\.json$/,
        use: path.resolve("src/node-utilities/optimized-topojson-loader.js")
      });

      // TODO try aliasing preact again, but previously it caused an issue with next/router.push (find-communities use-modal)
  
      if (phase !== "phase-development-server") {    
        config.plugins.push(new DuplicatePackageCheckerPlugin({
          exclude(instance) {
            return instance.name === "unist-util-visit-parents";
          }
        }));
      }
      
      return config;
    }
  };

  if (phase !== "phase-export") {
    nextConfig.redirects = async () => ([
      {
        source: "/discord",
        destination: "https://discord.com/invite/vdssRDg",
        permanent: true
      }
    ]);
  }

  const withBundleAnalyzer = BundleAnalyzer({
    enabled: false
  });

  return withBundleAnalyzer(nextConfig);
};