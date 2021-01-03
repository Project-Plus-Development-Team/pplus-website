/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const redirectParser = require("netlify-redirect-parser");

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    
    return config;
  },

  // this only affects dev environment and reads the redirects from the netlify.toml file to replicate behaviour in dev env
  async redirects() {
    const tomlFilePath = path.join(process.cwd(), "netlify.toml");
    const { success } = await redirectParser.parseNetlifyConfig(tomlFilePath);

    return success.map(({ path: source, to: destination }) => ({
      source,
      destination,
      permanent: true
    }));
  }
};