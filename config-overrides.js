// config-overrides.js
const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  const alias = config.resolve.alias || {};

  Object.assign(fallback, {
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify"),
  });
  config.resolve.alias = {
    ...alias,
    process: "process/browser",
  };
  config.resolve.fallback = {
    ...fallback,
    fs: false,
    process: require.resolve("process"),
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
