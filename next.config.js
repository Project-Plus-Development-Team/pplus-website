const path = require("path");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const BundleAnalyzer = require("@next/bundle-analyzer");

// [upstream] (fixed?) switch to ESM when this is fixed
// https://github.com/vercel/next.js/issues/33693

const isDebug = process.env.NEXT_DEBUG === "on";
const skipTSCheck = process.env.NEXT_TS_CHECK === "off";
const skipESLint = process.env.NEXT_ESLINT === "off";
const isAnalyze = process.env.NEXT_ANALYZE === "on";

module.exports = (phase) => {
  /**
   * @type {import("next").NextConfig}
   */
  const nextConfig = {
    swcMinify: true,

    // [upstream] https://github.com/dequelabs/axe-core-npm/issues/94
    // axe currently causes findDOMNode deprecation errors. see above issue for more.
    reactStrictMode: true,

    /** @param {import("webpack").Configuration} config */
    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.md$/,
          use: "raw-loader",
        },
        {
          test: /.*topo\.json$/,
          use: path.resolve("src/node-utilities/optimized-topojson-loader.js"),
        }
      );

      // FIXME try aliasing preact again, but previously it caused an issue with next/router.push (find-communities use-modal)

      if (phase !== "phase-development-server") {
        config.plugins.push(
          new DuplicatePackageCheckerPlugin({
            exclude(instance) {
              return instance.name === "unist-util-visit-parents";
            },
          })
        );
      }

      if (isDebug) {
        config.optimization.minimize = false;
        config.optimization.minimizer = [];
      }

      return config;
    },

    typescript: {
      ignoreBuildErrors: skipTSCheck,
    },
    eslint: {
      ignoreDuringBuilds: skipESLint,
    },
    productionBrowserSourceMaps: isDebug,
  };

  if (phase !== "phase-export") {
    nextConfig.redirects = async () => [
      {
        source: "/discord",
        destination: "https://discord.com/invite/vdssRDg",
        permanent: true,
      },
    ];
  }

  const withBundleAnalyzer = BundleAnalyzer({
    enabled: isAnalyze,
  });

  return withBundleAnalyzer(nextConfig);
};
