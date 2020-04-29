let url = process.argv[2];

const http = require("http"); // export http module
let list = [];

function printer(rez) {
  rez.setEncoding("utf8");
  let rawData = "";
  rez.on("data", (data) => {
    console.log("Data: " + data);
  });

  /* res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});

  list.forEach((a) => console.log(a + "\n"));
} */
}

http.get(url, printer);
