let port = process.argv[2];
const net = require("net");
const server = net.createServer(function (socket) {
  // socket handling logic

  const dt = new Date();
  let month = dt.getMonth();
  if (String(month + 1).length === 1) {
    month = "0" + (month + 1);
  } // starts at 0
  let day = dt.getDate();
  if (String(day).length === 1) {
    day = "0" + day;
  }
  let data =
    dt.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    " " +
    dt.getHours() +
    ":" +
    dt.getMinutes();
  socket.write(data);
  socket.end();
});
server.listen(port);

/* Use socket.write(data) to write data to the socket and socket.end() to
  close the socket. Alternatively, the .end() method also takes a data
  object so you can simplify to just: socket.end(data).
  */
