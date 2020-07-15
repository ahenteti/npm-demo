import express = require('express');
const app: express.Application = express();
const port = process.env.PORT || 4000;

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  console.log("enter get('/') method");
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
  console.log('Server is running on port ' + port);
});
