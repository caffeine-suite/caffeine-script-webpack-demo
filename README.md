### Building CaffeineScript with Webpack for use in the Browser

To see how to build browser-read JavaScript with CaffeineScript and Webpack, follow these steps:

```shell
git clone git@github.com:caffeine-suite/caffeine-script-webpack-demo.git
cd caffeine-script-webpack-demo
npm install
webpack

# hello.js is generated! yay!
```

And you've now generated a client-side-friendly `hello.js` file. Note, CaffeineScript generates ES6 code, so it won't work with older browsers without first running hello.js through a converter like Babel.js.

I've also included `hello.uglified.js.gz` to show just how small you can get things ~ 2k.

### Details

They key magic is in your `webpack.config.js` file:

```javascript
module.exports = {
  // Add the .caf extension to the extensions webpack looks for...
  resolve: { extensions: [".caf", ".js"] },

  // Add the caffeine-script webpack-loader so webpack knows how to load caf files...
  module: {rules: [{ test: /\.caf?$/, loader: "caffeine-mc/webpack-loader" }]},

  // standard webpack boilerplate
  output: { filename: "[name].js" },

  // configured to compile our ./hello file.
  // Note, this looks for the FIRST MATCH from the extensions list above:
  //   Example: hello.caf matches before hello.js
  entry: { hello: "./hello" }
};
```