### Building CaffeineScript with Webpack for use in the Browser

To see how to build browser-read JavaScript with CaffeineScript and Webpack, follow these steps:

```shell
git clone https://github.com/caffeine-suite/caffeine-script-webpack-demo.git
cd caffeine-script-webpack-demo
npm install
webpack

# dist/hello.js is generated! yay!
```

And you've now generated a client-side-friendly `hello.js` file. Note, CaffeineScript generates ES6 code, so it won't work with older browsers without first running hello.js through a converter like Babel.js.

I've also included `hello.uglified.js.gz` to show just how small you can get things ~ 2k.

### Developing in the browser with `webpack-dev-server`

Now that you have webpack working, you might get tired running it everytime you make and want to test a change.

Try running this:

```shell
webpack-dev-server
```

* After that loads, click this link: http://localhost:8080/hello
* You'll see a white page, but...
* Open up your dev console and you'll see: "Hello world!"
* Now for the fun part, edit hello.caf. Add a few "!!!" to the end of the string and save it.
# After a moment the page should automatically reload and you should see your new string appear in the console!

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