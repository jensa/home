var express = require('express')
var app = express();

var port = 8080;
app.set('port', port);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render ("index.jade");
})

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Listening at http://%s:%s', host, port)

})
