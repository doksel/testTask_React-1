let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },

  devServer: {
    overlay: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
        /*use: [
          'style-loader',
          'css-loader'
        ]*/
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
  // devtool: 'eval-sourcemap'
};

module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production ? 'source-map' : 'eval-sourcemap';
  return conf;
}

...
{
  test: /\.(scss)$/,
  use: [{
    loader: 'style-loader', // inject CSS to page
  }, {
    loader: 'css-loader', // translates CSS into CommonJS modules
  }, {
    loader: 'postcss-loader', // Run post css actions
    options: {
      plugins: function () { // post css plugins, can be exported to postcss.config.js
        return [
          require('precss'),
          require('autoprefixer')
        ];
      }
    }
  }, {
    loader: 'sass-loader' // compiles Sass to CSS
  }]
},
...