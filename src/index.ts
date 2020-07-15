const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', function (req: any, res: any) {
  console.log('enter get / method');
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Server is running on port ' + port);
});
