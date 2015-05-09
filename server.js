var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('io.js in a minimal docker image\n');
  process.exit(1);
  res.end();
});

server.listen(3000);
