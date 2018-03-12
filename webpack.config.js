module.exports = {
  resolve: { extensions: [".caf", ".caffeine", ".js"] },
  module: {
    rules: [{ test: /\.caf(feine)?$/, loader: "caffeine-mc/webpack-loader" }]
  },
  output: { filename: "[name].js" },
  entry: { hello: "./hello" }
};