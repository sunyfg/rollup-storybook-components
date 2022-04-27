module.exports = {
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css?|less?)$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/,
        use: ['url-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.woff(2)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]',
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ],
  },
};
