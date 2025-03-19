const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  plugins: [
    new NodePolyfillPlugin()
  ],
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      timers: require.resolve("timers-browserify")
    }
  }
};
