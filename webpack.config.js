const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");




// For a basic configuration, we need to provide webpack with three properties: entry, output, and mode. The first thing we want to declare is the entry property. The entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: __dirname + "/dist",
    filename: "main.bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
  ],
  mode: "development",
  devServer: {
    historyApiFallback: true,
  },
};

//   Inside the empty array, we need to tell webpack which plugin we want to use. We're going to use the providePlugin plugin to define the $ and jQuery variables to use the installed npm package. If we did not do this, the code would still not work even though we installed jQuery. Whenever you work with libraries that are dependent on the use of a global variable, just like jQuery is with $ and jQuery, you must tell webpack to make exceptions for these variables by using webpack.ProvidePlugin