var path = require('path')

module.exports = {
  context: path.resolve('public/js'),
  entry: "./app",
  output: {
    path: path.resolve('workoutroulette/build/js/'),
    publicPath: '/workoutroulette/public/js/',
    filename: "bundle.js"
  },
  watchOptions: {
    poll: false,
    ignored: /node_modules/
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(png|jpg|otf|eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  resolve: {
    extensions: ['.js','.es6'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
  // for production mode (according to https://vuejs.org/v2/guide/deployment.html), add this:
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"production"'
  //     }
  //   })
  // ]
}
