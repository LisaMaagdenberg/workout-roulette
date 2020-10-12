const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.set('views', './public/html')
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render("index")
})

app.listen(3000, () => {
  console.log("app has started on port 3000")
})