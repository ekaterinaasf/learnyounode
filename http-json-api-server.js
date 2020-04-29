// First case: "/api/parsetime";
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
//  The JSON response should contain only 'hour', 'minute' and 'second' properties.

// Second case: '/api/unixtime'
// { "unixtime": 1376136615474 }

let port = process.argv[2];
const http = require("http");
//const URL = require("url");

const server = http.createServer(function (req, res) {
  const site = new URL(req.url, "http://example.com");
  let result = "";
  if (site.pathname.includes("/api/parsetime")) {
    // search: '?iso=2013-08-10T12:10:15.474Z'
    let hour = Number(site.search.substring(16, 18));
    let min = Number(site.search.substring(19, 21));
    let sec = Number(site.search.substring(22, 24));
    result = { hour: hour + 2, minute: min, second: sec }; //+2 timezone correction I suppose
  } else if (site.pathname.includes("/api/unixtime")) {
    //let unixtime = Number(site.search.match(/[0-9]{11,}/));
    let unixtime = Date.parse(site.search.substring(5));
    //String(unixtime).split(".").join("");
    result = { unixtime: unixtime };
  } else {
    return "Error!";
  }
  console.log(req);
  //JSON.stringify()
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
});

server.listen(port);

/*
The JavaScript Date object can print dates in ISO format, e.g. new
  Date().toISOString(). It can also parse this format if you pass the string
  into the Date constructor. Date.getTime() will also come in handy.
*/
