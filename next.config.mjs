import path from "path";
import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
import makeBundleAnalyzer from "@next/bundle-analyzer";

export default phase => {
  /**
   * @type {import("next").NextConfig}
   */
  const nextConfig = {
    swcMinify: true,
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });

      config.module.rules.push({
        test: /world.*\.json$/,
        use: path.resolve("src/node-utilities/optimized-topojson-loader.js")
      });

      // import path in ESM (.mjs) currently causes a caching issue
      // this suppresses the warning until it's fixed in next.js's webpack version
      // https://github.com/vercel/next.js/issues/33693
      config.infrastructureLogging = {
        level: "error"
      };

      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom": "preact/compat"
        });
      }
  
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

  return nextConfig;
};