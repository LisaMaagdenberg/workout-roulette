// const express = require('express'),
//   app = express(),
//   bodyParser = require('body-parser');

// app.set('views', './public/html')
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//   res.render("index")
// })

// app.listen(3000, () => {
//   console.log("app has started on port 3000")
// })

const express = require('express'),
  app = express(),
  router = require(__dirname + '/routes.js'),
  webpack = require("webpack"),
  webpackConfig = require("./webpack.config"),
  webpackDevMiddleware = require("webpack-dev-middleware"),
  compiler = webpack(webpackConfig),
  bodyParser = require('body-parser');

app.set('views', './public')
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(router);
app.use(webpackDevMiddleware(compiler, {
  publicPath: "/workoutroulette/public/js/"
}));

app.listen(5000, () => {
  console.log("app has started on port 5000")
})
