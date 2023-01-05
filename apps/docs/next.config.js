module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    transpilePackages: ["ui", "redux-utils", "hooks-and-utils"],
  },
};
