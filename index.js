const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions }) => {
    const config = { ...webpackConfig };

    const urlLoader = getLoader(config, loaderByName('url-loader'));
    const loader = urlLoader.match.loader;

    loader.use = [
      {
        loader: loader.loader,
        options: Object.assign({}, loader.options),
      },
      {
        /**
         * @see https://github.com/tcoopman/image-webpack-loader
         */
        loader: 'image-webpack-loader',
        options: pluginOptions,
      },
    ];

    delete loader.loader;
    delete loader.options;

    return config;
  },
};
