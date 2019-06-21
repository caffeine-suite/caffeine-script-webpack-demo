module.exports = {
  // Add the .caf extension to the extensions webpack looks for...
  resolve:  { extensions: [".caf", ".js"] },

  // Add the caffeine-script webpack-loader so webpack knows how to load caf files...
  module:   { rules: [{ test: /\.caf$/, loader: "caffeine-mc/webpack-loader" }]},

  // configured to compile our ./hello file.
  // Note, this looks for the FIRST MATCH from the extensions list above:
  //   Example: hello.caf matches before hello.js
  entry:    { hello: "./hello" },

  // standard webpack boilerplate:
  //  make the output file name the same as the 'entry' name (but with .js)
  output:   { filename: "[name].js" },

  // change mode to 'production' to generate minimized code
  // change mode to 'development' for dev
  mode:     'none'
};