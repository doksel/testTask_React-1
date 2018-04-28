let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  // entry: './app/app.jsx',
  // output: {
  //   path: path.resolve(__dirname, './public'),
  //   filename: 'bundle.js',
  //   publicPath: 'public/'
  // },

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
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options:{
            presets:["env", "react"]
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', 
        }, {
          loader: 'postcss-loader', 
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader'
        }]
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