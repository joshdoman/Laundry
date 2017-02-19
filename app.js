var express = require('express'),
bodyParser = require('body-parser'),
app = express();
app.use(bodyParser.json());
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port 3000', server.address().port);
});

