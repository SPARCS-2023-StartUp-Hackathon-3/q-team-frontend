// config-overrides.js
const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify"),
  });
  config.resolve.fallback = { ...fallback, fs: false };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
