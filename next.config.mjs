import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";

export default phase => {
  /**
   * @type {import("next").NextConfig}
   */
  const nextConfig = {
    swcMinify: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });
  
      if (phase !== "phase-development-server") {
        // config.plugins.push(
        //   new BundleAnalyzerPlugin({
        //     analyzerMode: "static",
        //     openAnalyzer: true
        //   })
        // );
    
        // config.plugins.push(new DuplicatePackageCheckerPlugin({
        //   exclude(instance) {
        //     return instance.name === "unist-util-visit-parents";
        //   }
        // }));
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