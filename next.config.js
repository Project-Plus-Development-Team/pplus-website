// Function says: This file configures (or rather extends) Next.js
// Here we first tell it to use the raw-loader when we try to load .md files
// Then we also tell it to use the redirects that we specify for Netlify in the netlify.toml file

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

  // this only affects dev environment and reads the redirects from the netlify.toml file to replicate the behaviour in dev env
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