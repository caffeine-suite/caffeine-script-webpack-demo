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