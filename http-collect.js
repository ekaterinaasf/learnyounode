let url = process.argv[2];

const http = require("http"); // export http module

function printer(rez) {
  //console.log("Output of http.get: " + rez);
  rez.setEncoding("utf8");
  let rawData = "";
  rez.on("data", (chunk) => {
    rawData += chunk;
    console.log("Length: " + rawData.length);
    console.log(rawData);
  });
  rez.on("end", () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });

  rez.on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
}
http.get(url, printer);
