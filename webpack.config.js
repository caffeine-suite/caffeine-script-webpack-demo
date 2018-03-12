module.exports = {
  // Add the .caf extension to the extensions webpack looks for...
  resolve: { extensions: [".caf", ".js"] },

  // Add the caffeine-script webpack-loader so webpack knows how to load caf files...
  module: {rules: [{ test: /\.caf?$/, loader: "caffeine-mc/webpack-loader" }]},

  // standard webpack boilerplate
  mode: 'production',   // change to 'development' to turn off uglify
  output: { filename: "[name].js" },

  // configured to compile our ./hello file.
  // Note, this looks for the FIRST MATCH from the extensions list above:
  //   Example: hello.caf matches before hello.js
  entry: { hello: "./hello" }
};