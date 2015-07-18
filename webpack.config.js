var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
      app: "./app/assets/javascripts/application.js"
  },
  output: {
      path: path.join(__dirname, "app", "assets", "javascripts"),
      filename: "bundle.js"
  },
  resolve: {
  extensions: ["", ".js", ".jsx"]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "app/assets/javascripts"),
        exclude: /(node_modules)/,
        loader: "babel"
      },
      {
        test: require.resolve("react"),
        loader: "expose?React"
      }
    ]
  },
  eslint: {
    emitWarning: false,
    emitError: false,
    failOnWarning: false,
    failOnError: true
  }
};
