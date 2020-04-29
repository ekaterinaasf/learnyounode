let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

const http = require("http"); // export http module

http.get(url1, function (rez1) {
  rez1.setEncoding("utf8");
  let rawData1 = "";

  rez1.on("data", (chunk) => {
    rawData1 += chunk;
    console.log(url1 + ": " + rawData1);
    http.get(url2, function (rez2) {
      rez2.setEncoding("utf8");

      let rawData2 = "";

      rez2.on("data", (chunk) => {
        rawData2 += chunk;
        console.log(url1 + ": " + rawData2);
        http.get(url3, function (rez3) {
          rez3.setEncoding("utf8");
          let rawData3 = "";
          rez3.on("data", (chunk) => {
            rawData3 += chunk;
            console.log(url1 + ": " + rawData3);
          });
        }); // 3rd callback end
      });
    }); // 2nd calback end
  });
});
