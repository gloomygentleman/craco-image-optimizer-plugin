const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions }) => {
    const config = { ...webpackConfig };

    const urlLoader = getLoader(config, imageUrlLoaderMatcher());
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

function imageUrlLoaderMatcher() {
  const urlLoaderMatcher = loaderByName("url-loader");
  const matcher = rule => urlLoaderMatcher(rule) &&
    rule.test &&
    (Array.isArray(rule.test)
      ? rule.test.some(r => r.toString().indexOf("jpe?g") >= 0)
      : rule.test.toString().indexOf("jpe?g") >= 0);
  return matcher;
};
