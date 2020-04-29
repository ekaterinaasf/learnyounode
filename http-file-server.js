let port = process.argv[2];
let path = process.argv[3];

const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  ///
  let src = fs.createReadStream(path);
  src.pipe(res); //to pipe the data from the src stream to the dst stream
});

server.listen(port);

/* fs.createReadStream() method to
  stream the file contents to the response.
  */
