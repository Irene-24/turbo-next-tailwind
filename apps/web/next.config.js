const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  experimental: {
    transpilePackages: ["ui", "redux-utils", "hooks-and-utils"],
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
