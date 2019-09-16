### Building CaffeineScript with Webpack for use in the Browser

To see how to build browser-read JavaScript with CaffeineScript and Webpack, follow these steps:

```shell
git clone https://github.com/caffeine-suite/caffeine-script-webpack-demo.git
cd caffeine-script-webpack-demo
npm install
npx webpack

# dist/hello.js is generated! yay!
```

And you've now generated a client-side-friendly `hello.js` file. Note, CaffeineScript generates ES6 code, so it won't work with older browsers without first running hello.js through a converter like Babel.js.

I've also included `hello.uglified.js.gz` to show just how small you can get things ~ 2k.

### Developing in the browser with `webpack-dev-server`

Now that you have webpack working, you might get tired running it everytime you make and want to test a change.

Try running this:

```shell
npx webpack-dev-server
```

* After that loads, click this link: http://localhost:8080/hello
* You'll see a white page, but...
* Open up your dev console and you'll see: "Hello world!"
* Now for the fun part, edit hello.caf. Add a few "!!!" to the end of the string and save it.
* After a moment the page should automatically reload and you should see your new string appear in the console!

### Running your file in Node.js

Couldn't be easier. Try:

```shell
caf hello.caf
```

If you aren't starting your app with "caf", you'll need a `.js` file to start things. Further, before you 'require' your first caf file, you'll need to add `require('caffeine-script/register')` to your `.js` code. But that's about it, then you can use CaffeineScript everywhere.

Example:
```javascript
// register the caffeine-script compiler with Node.js
require('caffeine-script/register');

// loads and runs hello.caf - yay!
// Note: you don't need to specify the '.caf' extension
//   unless there is another file named 'hello.js'
require('./hello.caf');
```


### Details

They key magic is in your `webpack.config.js` file:

```javascript
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
  mode:     'development'
};
```