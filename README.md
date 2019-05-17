# Craco Image Optimizer

This is [craco](https://github.com/sharegate/craco) plugin.

Optimizer using image-webpack-loader

# installation

```text
# npm
$ npm install craco-image-optimizer-plugin

# yarn
$ yarn add craco-image-optimizer-plugin
```

# Usage

We are using the options of image-webpack-loader

See [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) for [options](https://github.com/tcoopman/image-webpack-loader#usage) settings

```javascript
// craco.config.js
// @see https://github.com/sharegate/craco/blob/master/packages/craco/README.md#configuration-overview
const imageOptimizer = require('craco-image-optimizer-plugin');

module.exports = {
  plugins: [
    {
      plugin: imageOptimizer,
      // image-webpack-plugin options
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '65-90',
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75,
        },
      },
    },
  ],
};
```

# License

MIT
