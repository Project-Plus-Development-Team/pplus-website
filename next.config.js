// Function says: This file configures (or rather extends) Next.js
// Here we first tell it to use the raw-loader when we try to load .md files
// Then we also tell it to use the redirects that we specify for Netlify in the netlify.toml file

/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const redirectParser = require("netlify-redirect-parser");
const optimizedImages = require("next-optimized-images");
const withPlugins = require('next-compose-plugins');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const plugins = [
  [optimizedImages, {
    optimizeImagesInDev: true,
    removeOriginalExtension: true,
    // defaultImageLoader: "responsive-loader",
    responsive: {
      adapter: require('responsive-loader/sharp')
    },
    webp: {
      quality: 90
    }
  }]
];

function getNextConfig(phase) {
  const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });
  
      if (phase === "phase-export") {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: true
          })
        );
    
        config.plugins.push(new DuplicatePackageCheckerPlugin({
          exclude(instance) {
            return instance.name === "unist-util-visit-parents";
          }
        }));
      }
      
      return config;
    }
  };

  if (phase !== "phase-export") { // redirects are invalid when exporting and would create a warning
    // this only affects dev environment and reads the redirects from the netlify.toml file to replicate the behaviour in dev env
    nextConfig.redirects = async function() {
      const tomlFilePath = path.join(process.cwd(), "netlify.toml");
      const { success } = await redirectParser.parseNetlifyConfig(tomlFilePath);
  
      return success.map(({ path: source, to: destination }) => ({
        source,
        destination,
        permanent: true
      }));
    };
  }

  return nextConfig;
}

module.exports = (phase, ...rest) => {
  const nextConfig = getNextConfig(phase);
  return withPlugins(plugins, nextConfig)(phase, ...rest);
};